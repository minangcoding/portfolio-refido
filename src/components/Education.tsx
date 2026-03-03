import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '../constants';

interface EducationItem {
  school?: string;
  Bootcamp?: string;
  degree: string;
  period: string;
  description: string;
  achievements?: string[];
}

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3"
        >
          <span className="text-blue-500">05.</span> Education & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {(EDUCATION as EducationItem[]).map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex gap-4">
                  <div className="mt-1 p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.school || edu.Bootcamp}</h3>
                    <div className="text-blue-400 font-medium">{edu.degree}</div>
                  </div>
                </div>
                <span className="text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-700 h-fit w-fit">
                  {edu.period}
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6 pl-[4.5rem]">
                {edu.description}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="pl-[4.5rem]">
                  <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                    <Award size={14} className="text-yellow-500" /> Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
