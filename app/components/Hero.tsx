'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-screen-1200 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            <span className="font-mono text-sm text-gray-300">Full-Stack Developer /&gt;</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-gradient">Harsh Wardhan</span>
          </h1>

          {/* Stacked Typography */}
          <div className="text-4xl md:text-6xl font-bold mb-6">
            <p className="text-white">Full-Stack</p>
            <p className="text-gray-400">& AI Engineer</p>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-400 mb-8 max-w-lg"
          >
            Building scalable systems and intelligent applications with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:shadow-[0_0_30px_rgba(87,240,255,0.4)] transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Animated Orbit Lines */}
          <svg className="absolute -top-20 -left-20 w-96 h-96 opacity-20" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(87,240,255,0.3)" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="15s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </motion.div>

        {/* Right Side - Terminal Window */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10"
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <span className="ml-4 text-gray-400 text-sm">bash — 80x24</span>
            </div>
            <div className="terminal-content">
              <div className="text-gray-300">
                <p><span className="text-neon-green">$</span> npm install -g create-next-app</p>
                <p className="text-gray-500 mb-2">...</p>
                <p><span className="text-neon-green">$</span> git commit -m "feat: build scalable systems"</p>
                <p className="text-neon-blue">[main a1b2c3d] feat: build scalable systems</p>
                <p className="text-gray-500"> 5 files changed, 234 insertions</p>
                <p className="mb-2"></p>
                <p><span className="text-neon-green">$</span> ls projects/</p>
                <p className="text-purple-400">portfolio/</p>
                <p className="text-purple-400">ecommerce-api/</p>
                <p className="text-purple-400">ml-pipeline/</p>
                <p className="mb-2"></p>
                <p><span className="text-neon-green">$</span> echo $STATUS</p>
                <p className="text-neon-green">🚀 Ready to build amazing things</p>
                <p className="mt-2"><span className="text-neon-green">$</span> <span className="animate-pulse">▋</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
