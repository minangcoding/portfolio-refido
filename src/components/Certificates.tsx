import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { CERTIFICATES } from '../constants';

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3"
        >
          <span className="text-blue-500">06.</span> Licenses & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all group hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Award size={24} />
                </div>
                <a 
                  href={cert.link} 
                  className="text-slate-500 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {cert.name}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4 font-mono">
                <span className="font-semibold text-slate-300">{cert.issuer}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {cert.date}
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
