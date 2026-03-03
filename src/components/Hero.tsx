import { motion } from 'motion/react';
import { Download, ChevronRight, Terminal } from 'lucide-react';
import { PROFILE } from '../constants';
import NeuralNetworkBackground from './NeuralNetworkBackground';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Neural Network Background Animation */}
      <NeuralNetworkBackground />
      
      {/* Abstract Background Data Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Gradient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">
        
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-mono text-green-400 tracking-wide uppercase">
              {PROFILE.availability}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              {PROFILE.name}
            </span>
          </h1>
          
          <div className="flex items-center gap-3 mb-8 bg-slate-800/50 w-fit px-4 py-2 rounded-lg border border-slate-700/50 backdrop-blur-sm">
            <Terminal size={18} className="text-blue-400" />
            <code className="text-blue-200 font-mono text-sm md:text-base">
              {PROFILE.role}
            </code>
          </div>

          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            {PROFILE.bio}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              View Projects <ChevronRight size={18} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1tNJ7iQ3eKU0VCZf48fEDWm4jJrLWQRMA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-800 border border-slate-700 text-slate-200 rounded-lg font-medium hover:bg-slate-700 transition-all flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Photo & Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative Rings */}
            <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border border-indigo-500/10 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Photo Container */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-800 z-10">
              <img 
                src="https://drive.google.com/thumbnail?id=1veombq9gqZfclB1jQgMzK6CkudO-h6Q0&sz=w1000" 
                alt={PROFILE.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Badge Accuracy - Jauh ke kiri */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-24 lg:-left-32 top-10 bg-slate-800/95 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-2xl flex items-center gap-3 z-20 min-w-[140px]"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">
                95
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Accuracy</div>
                <div className="text-sm font-bold text-white">Model Perf.</div>
              </div>
            </motion.div>

            {/* Badge Experience - Jauh ke kanan */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-24 lg:-right-32 bottom-10 bg-slate-800/95 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-2xl flex items-center gap-3 z-20 min-w-[140px]"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">
                2+
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Years</div>
                <div className="text-sm font-bold text-white">Experience</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}