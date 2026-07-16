"use client";

import { motion } from "motion/react";
import { buttonVariants } from "@src/components/ui/button";
import { ShoppingBag01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.6,
    },
  },
};

const bagIconVariants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5, ease: "easeInOut" as const },
  },
};

const arrowIconVariants = {
  initial: { x: 0 },
  hover: {
    x: 6,
    transition: { type: "spring" as const, stiffness: 400, damping: 12 },
  },
};

export function HeroCTA() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-4 mt-8"
    >
      <motion.div whileHover="hover" className="inline-block">
        <Link
          href="/products"
          className={buttonVariants({
            variant: "default",
            size: "lg",
            className: "bg-accent! text-zinc-950! hover:bg-accent/90! rounded-full gap-2 px-8 h-12 text-base font-semibold transition-all shadow-lg shadow-accent/10 hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98] duration-300 cursor-pointer"
          })}
        >
          <motion.span variants={bagIconVariants} className="flex items-center">
            <HugeiconsIcon icon={ShoppingBag01Icon} size={18} strokeWidth={1.5} />
          </motion.span>
          Shop Collection
        </Link>
      </motion.div>

      <motion.div whileHover="hover" className="inline-block">
        <Link
          href="/products?category=new"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "border-white/30! text-white! hover:bg-white/10! hover:border-white! rounded-full gap-2 px-8 h-12 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98] duration-300 cursor-pointer"
          })}
        >
          Explore New Arrivals
          <motion.span variants={arrowIconVariants} className="flex items-center">
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={1.5} />
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
