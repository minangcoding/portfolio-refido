import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3"
        >
          <span className="text-blue-500">04.</span> Professional Journey
        </motion.h2>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-blue-500 ring-4 ring-slate-900" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg text-blue-400 mb-4 font-medium">{exp.company}</div>
              
              <p className="text-slate-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech && exp.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
