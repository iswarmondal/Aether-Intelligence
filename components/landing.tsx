'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Activity, Shield, Crosshair } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.15], ["blur(0px)", "blur(10px)"]);

  return (
    <div ref={containerRef} className="relative bg-[#030303] text-neutral-300 selection:bg-teal-500/30 selection:text-teal-100 font-sans">
      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.015] mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Hero */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale, filter: heroBlur }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-teal-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></div>
              <div className="font-mono text-xs tracking-[0.3em] text-teal-500/70 uppercase">
                Aether Intelligence
              </div>
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-neutral-100 mb-6 leading-[0.85]">
              Find the <br/>
              <span className="text-neutral-700">signal.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
              Where noise ends, truth begins. A high-signal intelligence platform for the quiet elite.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="font-mono text-[10px] tracking-[0.2em] text-neutral-600 uppercase">Tune frequency</div>
          <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-600 to-transparent"></div>
        </motion.div>
      </motion.section>

      {/* The rest of the page flows normally over the sticky hero */}
      <div className="relative z-10 bg-[#030303]">
        
        {/* Statement Section */}
        <section className="py-32 md:py-48 px-6 max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-200 leading-tight max-w-4xl">
              In an era of infinite information, <span className="text-neutral-600">clarity is the ultimate luxury.</span> We don&apos;t aggregate data. We distill it.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-neutral-900 pt-16">
            <div>
              <div className="font-mono text-xs text-neutral-600 mb-4 tracking-widest">01 // APPROACH</div>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">We treat darkness not as absence, but as material. By eliminating the superfluous, the essential reveals itself with absolute precision.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-neutral-600 mb-4 tracking-widest">02 // METHOD</div>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Our algorithms act as an anechoic chamber for global data streams, absorbing the noise so you can hear the heartbeat of the market.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-neutral-600 mb-4 tracking-widest">03 // RESULT</div>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Decisions made not from a place of overwhelming volume, but from quiet, unshakeable conviction.</p>
            </div>
          </FadeIn>
        </section>

        {/* Instrument Panel / Features */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
              <div className="flex items-center gap-4 mb-16">
                <div className="h-[1px] flex-1 bg-neutral-900"></div>
                <h3 className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">System Capabilities</h3>
                <div className="h-[1px] flex-1 bg-neutral-900"></div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <FadeIn delay={0.1}>
                <div className="group relative h-full border border-neutral-900 bg-[#050505] p-8 transition-all duration-500 hover:border-teal-500/30 hover:bg-[#080808]">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="relative z-10">
                    <Activity className="w-5 h-5 text-neutral-600 mb-10 transition-colors duration-500 group-hover:text-teal-400" strokeWidth={1.5} />
                    <h4 className="font-display text-xl text-neutral-200 mb-4 tracking-tight">Signal Extraction</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-10 font-light">Isolate high-value intelligence from chaotic global data streams with sub-millisecond latency.</p>
                    <div className="font-mono text-[10px] text-neutral-600 flex items-center gap-2 tracking-widest">
                      <span className="inline-block w-1 h-1 rounded-full bg-neutral-800 group-hover:bg-teal-500 transition-colors duration-500 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.8)]"></span>
                      STATUS: ACTIVE
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Card 2 */}
              <FadeIn delay={0.2}>
                <div className="group relative h-full border border-neutral-900 bg-[#050505] p-8 transition-all duration-500 hover:border-violet-500/30 hover:bg-[#080808]">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="relative z-10">
                    <Shield className="w-5 h-5 text-neutral-600 mb-10 transition-colors duration-500 group-hover:text-violet-400" strokeWidth={1.5} />
                    <h4 className="font-display text-xl text-neutral-200 mb-4 tracking-tight">Encrypted Synthesis</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-10 font-light">Zero-knowledge processing ensures your queries and resulting insights remain entirely opaque to outside observers.</p>
                    <div className="font-mono text-[10px] text-neutral-600 flex items-center gap-2 tracking-widest">
                      <span className="inline-block w-1 h-1 rounded-full bg-neutral-800 group-hover:bg-violet-500 transition-colors duration-500 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
                      STATUS: SECURE
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Card 3 */}
              <FadeIn delay={0.3}>
                <div className="group relative h-full border border-neutral-900 bg-[#050505] p-8 transition-all duration-500 hover:border-amber-500/30 hover:bg-[#080808]">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="relative z-10">
                    <Crosshair className="w-5 h-5 text-neutral-600 mb-10 transition-colors duration-500 group-hover:text-amber-400" strokeWidth={1.5} />
                    <h4 className="font-display text-xl text-neutral-200 mb-4 tracking-tight">Threat Isolation</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-10 font-light">Predictive modeling that identifies emerging market anomalies before they register on conventional instruments.</p>
                    <div className="font-mono text-[10px] text-neutral-600 flex items-center gap-2 tracking-widest">
                      <span className="inline-block w-1 h-1 rounded-full bg-neutral-800 group-hover:bg-amber-500 transition-colors duration-500 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                      STATUS: CALIBRATED
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Data Visualization Abstract */}
        <section className="py-32 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-[1px] h-full bg-neutral-800 absolute left-1/4"></div>
            <div className="w-[1px] h-full bg-neutral-800 absolute left-2/4"></div>
            <div className="w-[1px] h-full bg-neutral-800 absolute left-3/4"></div>
            <div className="h-[1px] w-full bg-neutral-800 absolute top-1/4"></div>
            <div className="h-[1px] w-full bg-neutral-800 absolute top-2/4"></div>
            <div className="h-[1px] w-full bg-neutral-800 absolute top-3/4"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="border border-neutral-900 bg-[#030303] p-1 md:p-2 rounded-sm shadow-2xl shadow-black">
                <div className="border border-neutral-800/50 p-6 md:p-12 relative overflow-hidden bg-[#050505]">
                  <div className="absolute top-4 left-4 font-mono text-[10px] text-neutral-600 tracking-widest">OBSERVATORY_FEED_LIVE</div>
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="w-1 h-3 bg-teal-500/20"></div>
                    <div className="w-1 h-3 bg-teal-500/40"></div>
                    <div className="w-1 h-3 bg-teal-500/80"></div>
                    <div className="w-1 h-3 bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]"></div>
                  </div>
                  
                  <div className="mt-12 font-mono text-xs text-neutral-500 leading-loose tracking-wide">
                    <div className="flex gap-4"><span className="text-neutral-700">01</span> <span>INITIALIZING AETHER PROTOCOL...</span></div>
                    <div className="flex gap-4"><span className="text-neutral-700">02</span> <span>ESTABLISHING SECURE HANDSHAKE... <span className="text-teal-500">OK</span></span></div>
                    <div className="flex gap-4"><span className="text-neutral-700">03</span> <span>FILTERING BACKGROUND RADIATION...</span></div>
                    <div className="flex gap-4"><span className="text-neutral-700">04</span> <span>ISOLATING PRIMARY SIGNAL...</span></div>
                    <div className="flex gap-4 mt-4"><span className="text-neutral-700">05</span> <span className="text-neutral-300">TARGET ACQUIRED.</span></div>
                  </div>
                  
                  {/* Abstract waveform */}
                  <div className="mt-16 h-24 flex items-end gap-[2px] opacity-80">
                    {[...Array(50)].map((_, i) => {
                      // Deterministic pseudo-random height based on index
                      const height = ((i * 13) % 100);
                      const isSignal = i > 20 && i < 30;
                      return (
                        <motion.div 
                          key={i}
                          initial={{ height: '10%' }}
                          animate={{ height: `${isSignal ? height * 0.8 + 20 : height * 0.2 + 5}%` }}
                          transition={{ repeat: Infinity, repeatType: 'reverse', duration: isSignal ? 0.4 : 2, delay: i * 0.05 }}
                          className={`flex-1 ${isSignal ? 'bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]' : 'bg-neutral-800'}`}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-48 px-6 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeIn>
              <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-neutral-100 mb-8">
                Step into the dark.
              </h2>
              <p className="text-neutral-400 mb-12 max-w-lg mx-auto font-light leading-relaxed">
                Access to Aether is strictly curated. Request an invitation to join the observatory and experience absolute clarity.
              </p>
              
              <button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-neutral-700 text-neutral-300 font-mono text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:border-amber-500/50 hover:text-amber-100 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <span>Request Access</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-amber-400" strokeWidth={1.5} />
              </button>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-neutral-900">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[10px] text-neutral-600 tracking-[0.2em] uppercase">
            <div>&copy; {new Date().getFullYear()} Aether Intelligence</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-neutral-300 transition-colors">Protocol</a>
              <a href="#" className="hover:text-neutral-300 transition-colors">Manifesto</a>
              <a href="#" className="hover:text-neutral-300 transition-colors">Secure Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
