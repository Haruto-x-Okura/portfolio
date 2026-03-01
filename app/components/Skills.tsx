'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: '🎨' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React', icon: '⚛️' },
  { name: 'Redux', icon: '🔄' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Python', icon: '🐍' },
  { name: 'Django', icon: '🎯' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Figma', icon: '🎨' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-screen-1200 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">{"<Skills/>"}</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono">SYSTEM.LOAD_TECHNOLOGIES()</p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="glass-card glass-card-hover p-4 flex flex-col items-center justify-center gap-2 cursor-default"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
