'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    name: 'AI Chat Application',
    description: 'Real-time chat with AI powered by OpenAI API',
    tech: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
    github: '#',
    live: '#',
  },
  {
    name: 'Task Management App',
    description: 'Collaborative project management tool',
    tech: ['Next.js', 'Redux', 'MongoDB', 'Tailwind'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-screen-1200 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">{"<Works/>"}</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Project Image/Screenshot */}
              <div className="glass-card p-2">
                <div className="bg-gradient-to-br from-bg-secondary to-bg-primary rounded-xl h-64 flex items-center justify-center">
                  <div className="text-gray-500 text-lg font-mono">Project Screenshot</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Terminal Preview */}
                <div className="terminal-window mb-6">
                  <div className="terminal-header">
                    <div className="terminal-dot terminal-dot-red"></div>
                    <div className="terminal-dot terminal-dot-yellow"></div>
                    <div className="terminal-dot terminal-dot-green"></div>
                  </div>
                  <div className="terminal-content py-3">
                    <p className="text-gray-400 text-sm">
                      <span className="text-neon-green">$</span> type 'github' to visit repo
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-neon-green">$</span> type 'live' to visit demo
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-blue/20 border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/30 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
