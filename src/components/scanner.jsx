import React from "react";
import { motion } from "framer-motion";

// Single-file React component (Tailwind CSS + Framer Motion)
// Drop this component into a Next.js or Create React App project that has Tailwind and framer-motion installed.

export default function ScannerAnimation() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.random() * 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 p-6">
      <div className="relative w-full max-w-3xl h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-neutral-800 to-neutral-900">
        {/* Background subtle grid */}
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,#ffffff05,#ffffff05_1px,#0000_1px,#0000_20px)]" />

        {/* Faint glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-cyan-400 to-purple-500" />
        </div>

        {/* Content area (where the scanning happens) */}
        <div className="absolute inset-6 rounded-xl bg-black/20 backdrop-blur-sm ring-1 ring-white/5 p-6">
          <h2 className="text-white text-xl font-semibold mb-4">
            Document Scanner
          </h2>

          {/* Simulated document */}
          <div className="relative mx-auto bg-neutral-900 border border-white/6 w-full h-[300px] rounded-lg overflow-hidden">
            {/* Particles (floating sparks) */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  y: [0, -20 - Math.random() * 40],
                  x: [0, (Math.random() - 0.5) * 40],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: p.delay,
                }}
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: p.size,
                  height: p.size,
                }}
                className="absolute rounded-full bg-white/80 blur-sm"
              />
            ))}

            {/* Scanning bar - a bright gradient that moves top -> bottom */}
            <motion.div
              className="absolute left-0 right-0 h-12 pointer-events-none"
              initial={{ y: -80 }}
              animate={{ y: [-80, 320, -80] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,255,236,0) 0%, rgba(0,255,236,0.14) 20%, rgba(255,255,255,0.85) 50%, rgba(0,255,236,0.14) 80%, rgba(0,255,236,0) 100%)",
                mixBlendMode: "screen",
                transform: "skewY(-8deg)",
              }}
            />

            {/* A soft highlight overlay to emulate scanned texture */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(0,0,0,0.02))]" />

            {/* Example content lines on the document */}
            <div className="absolute left-8 right-8 top-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 rounded-md mb-4 bg-white/6"
                  style={{ width: `${80 - i * 6}%` }}
                />
              ))}
            </div>

            {/* A subtle noise overlay to feel 'video-scanned' */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                mixBlendMode: "overlay",
                opacity: 0.06,
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 5px)",
              }}
            />
          </div>

          {/* Footer status */}
          <div className="mt-4 flex items-center justify-between text-sm text-white/60">
            <div>
              Scanning...{" "}
              <span className="ml-2 font-medium text-white">45%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400/80 shadow-md" />
              <div>Live</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
