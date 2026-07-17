'use client';

import {
  CartAction,
  CartItem,
  CartState,
  ProductColor,
  ProductSize,
} from '@src/types';
import React, { createContext, use, useEffect, useReducer } from 'react';

const initialState: CartState = {
  items: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        item =>
          item.productId === newItem.productId &&
          item.selectedColor === newItem.selectedColor &&
          item.selectedSize === newItem.selectedSize,
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += newItem.quantity;
        return { ...state, items: newItems };
      }

      return { ...state, items: [...state.items, newItem] };
    }

    case 'REMOVE_ITEM': {
      const { productId, selectedColor, selectedSize } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          item =>
            !(
              item.productId === productId &&
              item.selectedColor === selectedColor &&
              item.selectedSize === selectedSize
            ),
        ),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, selectedColor, selectedSize, quantity } =
        action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item =>
              !(
                item.productId === productId &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
              ),
          ),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.productId === productId &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
            ? { ...item, quantity }
            : item,
        ),
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    productId: number,
    quantity: number,
    color: ProductColor,
    size: ProductSize,
  ) => void;
  removeFromCart: (
    productId: number,
    color: ProductColor,
    size: ProductSize,
  ) => void;
  updateQuantity: (
    productId: number,
    color: ProductColor,
    size: ProductSize,
    quantity: number,
  ) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize state synchronously on the client, defaulting to empty on the server
  const [state, dispatch] = useReducer(cartReducer, initialState, initial => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('velour_cart');
        return savedCart ? { items: JSON.parse(savedCart) } : initial;
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
        return initial;
      }
    }
    return initial;
  });

  // Save cart to localStorage on state changes
  useEffect(() => {
    try {
      localStorage.setItem('velour_cart', JSON.stringify(state.items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [state.items]);

  const addToCart = (
    productId: number,
    quantity: number,
    color: ProductColor,
    size: ProductSize,
  ) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId,
        quantity,
        selectedColor: color,
        selectedSize: size,
      },
    });
  };

  const removeFromCart = (
    productId: number,
    color: ProductColor,
    size: ProductSize,
  ) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        productId,
        selectedColor: color,
        selectedSize: size,
      },
    });
  };

  const updateQuantity = (
    productId: number,
    color: ProductColor,
    size: ProductSize,
    quantity: number,
  ) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        productId,
        selectedColor: color,
        selectedSize: size,
        quantity,
      },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Derive cart total item count
  const cartCount = state.items.reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = use(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
