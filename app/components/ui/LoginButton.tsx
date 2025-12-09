"use client";

import { motion } from "framer-motion";

export default function LoginButton({ className }: { className?: string }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${className ?? ""} md:bg-red-600 md:hover:bg-red-500 md:text-white text-red-500 font-semibold md:py-1 py-11/12 md:px-6 px-3 md:text-sm text-[12px] rounded-full hover:scale-105 transition-transform cursor-pointer`}
    >
      Login
    </motion.button>
  );
}
