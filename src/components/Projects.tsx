import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-blue-500">03.</span> Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of data science and engineering projects demonstrating end-to-end capabilities from data processing to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image Section */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full border border-slate-700 text-xs font-mono text-blue-400">
                  {project.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-900/50 p-2 rounded border border-slate-700/50 text-center">
                      <span className="text-xs font-mono text-green-400 block">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-slate-500 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
