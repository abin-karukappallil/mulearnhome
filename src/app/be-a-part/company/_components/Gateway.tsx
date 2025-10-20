"use client";

import { motion } from "framer-motion";

export default function Gateway() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-center leading-tight tracking-tight"
        >
          <span className="text-[#1A202C]">Your gateway to the </span>
          <span className="text-[#456FF6]">µLearn </span>
          <span className="text-[#1A202C]">talent pool</span>
        </motion.h2>
      </div>
    </section>
  );
}
