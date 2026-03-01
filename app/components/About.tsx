"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-zinc-900/30">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-blue-400 mr-2">01.</span>
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800">
              <p className="text-zinc-300 leading-relaxed mb-4">
                I develop full-stack solutions that prioritize scalability, performance, and intuitive design.
                By combining frontend precision with backend architecture,
                I create applications that are both technically sound and user-focused.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl text-center border border-zinc-800"
              >
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <p className="text-zinc-500 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
