import { motion } from 'motion/react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { SKILLS_DATA, SERVICES } from '../constants';

export default function SkillsDashboard() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Services / Expertise */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <span className="text-blue-500">01.</span> Expertise
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors group"
                >
                  <service.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Technical Proficiency Chart */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <span className="text-blue-500">02.</span> Technical Proficiency
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-[400px] shadow-lg"
            >
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Skill Metrics</h3>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></span>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={SKILLS_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'monospace' }} 
                    width={80}
                  />
                  <Tooltip 
                    cursor={{ fill: '#334155', opacity: 0.2 }}
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#3b82f6' }}
                  />
                  <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                    {SKILLS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#3b82f6" fillOpacity={0.8 + (index * 0.02)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
