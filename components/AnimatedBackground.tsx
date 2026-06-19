"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(87,230,230,0.16),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(255,107,138,0.18),transparent_30%),radial-gradient(circle_at_52%_88%,rgba(255,200,87,0.12),transparent_28%)]" />
      <motion.div
        className="aurora-mask absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_90deg,#57E6E6,#9E7CFF,#FF6B8A,#FFC857,#57E6E6)] opacity-25 blur-3xl"
        animate={{ rotate: 360, scale: [1, 1.12, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <div className="noise-overlay absolute inset-0 opacity-[0.05]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
    </div>
  );
}
