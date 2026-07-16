"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="relative w-full h-full overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
        alt="Fashion model wearing premium Velour clothing"
        fill
        className="object-cover object-center"
        priority
      />
    </motion.div>
  );
}
