import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Plus } from 'lucide-react';

const works = [
  { id: 1, name: "Spotify", client: "Spotify", category: "WEB3", color: "bg-yellow-400" },
  { id: 2, name: "Patreon", client: "Patreon", category: "BRANDING", color: "bg-purple-500" },
  { id: 3, name: "GDK", client: "Google", category: "GAME", color: "bg-orange-500" },
  { id: 4, name: "Dreamwave", client: "Dreamwave", category: "AI", color: "bg-pink-500" },
  { id: 5, name: "Reliable Robotics", client: "Reliable", category: "PLATFORM", color: "bg-blue-500" },
  { id: 6, name: "Google", client: "Google", category: "WEB", color: "bg-green-500" }
];

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="relative min-h-screen bg-b-yellow overflow-hidden flex flex-col items-center justify-center pt-20">
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <div className="w-12 h-6 border-2 border-b-black rounded-full flex items-center justify-center">
          <div className="w-8 flex gap-1">
             <div className="h-4 w-1 bg-b-black rounded-full"></div>
             <div className="h-4 w-1 bg-b-black rounded-full scale-y-75"></div>
             <div className="h-4 w-1 bg-b-black rounded-full scale-y-50"></div>
          </div>
        </div>
        <div className="flex gap-4">
          {['WORKS', 'PROFILE', 'CONTACT'].map((item) => (
            <button key={item} className="px-6 py-2 border-2 border-b-black rounded-full text-sm font-bold hover:bg-b-black hover:text-b-yellow transition-colors mix-blend-difference">
              {item}
            </button>
          ))}
        </div>
      </nav>

      <motion.div style={{ y: y1 }} className="absolute z-10 w-full flex justify-center pointer-events-none">
         <h1 className="text-[20vw] leading-none font-black tracking-tighter text-b-black px-4 whitespace-nowrap overflow-hidden">
            <span className="inline-block relative">
               Buttermax
               <svg className="absolute -bottom-4 left-0 w-full h-8 text-b-black" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="2" fill="transparent" />
               </svg>
            </span>
         </h1>
      </motion.div>

      <motion.div style={{ y: y2 }} className="relative z-20 mt-[20vh]">
         <div className="w-64 h-80 bg-gray-900 rounded-xl border-4 border-gray-700 shadow-2xl relative overflow-hidden transform rotate-12 hover:rotate-6 transition-transform duration-500 cursor-pointer">
            <div className="absolute inset-2 bg-gray-800 rounded-lg p-2 flex flex-col shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
               <div className="w-full h-1/2 bg-black rounded border-2 border-gray-600 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20" />
                  <div className="w-full h-full flex items-center justify-center text-xs text-green-500 font-mono animate-pulse">
                     READY
                  </div>
               </div>
               <div className="flex justify-between items-start px-2">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] bg-gray-600" />
                  </div>
                  <div className="flex gap-2 rotate-[-20deg]">
                     <div className="w-6 h-6 rounded-full bg-red-600 border border-gray-900 shadow-sm" />
                     <div className="w-6 h-6 rounded-full bg-green-600 border border-gray-900 shadow-sm" />
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
      
      <div className="absolute bottom-10 left-10 text-xs font-bold uppercase tracking-widest max-w-[200px]">
        The Gold Standard in Buttery Smooth Digital Production.
      </div>
    </div>
  );
}

function WhoWeAre() {
  return (
    <div className="min-h-[60vh] bg-b-yellow flex flex-col md:flex-row p-10 md:p-20 relative">
       <div className="md:w-1/4 mb-10 md:mb-0">
          <p className="font-bold text-sm uppercase">Who We Are</p>
       </div>
       <div className="md:w-3/4">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">
             Buttermax is a digital studio founded on a culture of collaboration. We melt for lovingly crafted design, motion and technology.
          </h2>
       </div>
       <div className="absolute w-64 h-64 bg-b-black rounded-full blur-3xl -left-20 top-0 opacity-20 Mix-blend-multiply"></div>
    </div>
  )
}

function Projects() {
  return (
    <div className="bg-b-yellow p-10 md:p-20 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {works.map((work) => (
           <motion.div 
             key={work.id}
             whileHover={{ y: -10 }}
             className={`aspect-square rounded-2xl p-6 relative overflow-hidden group cursor-pointer border border-black/10 ${work.color}`}
           >
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white text-xs font-bold rounded-full uppercase">
                 {work.client} 
                 <span className="opacity-50 ml-2">{work.category}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                 {/* Placeholder for 3d object */}
                 <div className="w-32 h-32 md:w-48 md:h-48 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-2xl flex flex-col items-center justify-center transform rotate-12">
                   <div className="w-3/4 h-1/2 bg-black/80 rounded-lg mb-4"></div>
                   <div className="flex gap-2">
                     <div className="w-6 h-6 rounded-full bg-black/40"></div>
                     <div className="w-6 h-6 rounded-full bg-black/40"></div>
                     <div className="w-6 h-6 rounded-full bg-black/40"></div>
                   </div>
                 </div>
              </div>
              <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                    <ArrowRight size={20} />
                 </div>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  )
}

function AllWorks() {
   const categories = ['ALL', 'BRANDING', 'WEB', 'GAME', 'AI', 'PLATFORM'];
   const [active, setActive] = useState('ALL');

   return (
     <div className="bg-b-black text-white min-h-screen p-10 md:p-20 relative overflow-hidden">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
          <h2 className="text-6xl md:text-[10vw] font-black leading-none uppercase mb-10 md:mb-0 text-b-yellow">
            All <br/> Works
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-4 max-w-lg justify-end">
             {categories.map(cat => (
               <button 
                  key={cat} 
                  onClick={() => setActive(cat)}
                  className={`px-6 py-2 rounded-full font-bold text-sm md:text-base border transition-colors ${
                    active === cat ? 'bg-b-yellow text-black border-b-yellow' : 'border-white/20 hover:border-white/50 text-white'
                  }`}
               >
                 {cat}
               </button>
             ))}
          </div>
       </div>

       {/* Decorative Shapes */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-80 pointer-events-none">
          <div className="w-full aspect-[2/1] bg-gradient-to-r from-green-400 via-blue-500 to-red-500 rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
       </div>

       <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[1,2,3].map(i => (
             <div key={i} className="aspect-[3/4] bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center group cursor-pointer relative overflow-hidden hover:border-b-yellow transition-colors">
               <div className="absolute inset-0 bg-b-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <span className="text-gray-700 font-bold text-2xl group-hover:text-b-yellow transition-colors">PROJECT {i}</span>
               <div className="absolute top-4 left-4 text-xs font-mono text-gray-500 uppercase flex flex-col">
                  <span>Client {i}</span>
                  <span>{categories[i]}</span>
               </div>
             </div>
          ))}
       </div>
     </div>
   )
}

function Contact() {
  return (
    <div className="bg-b-yellow p-10 md:p-20 relative overflow-hidden min-h-screen flex flex-col">
       <h2 className="text-[15vw] font-black uppercase text-b-black leading-none -ml-4 whitespace-nowrap opacity-10 pointer-events-none absolute top-10">
          Reach Out Reach Out
       </h2>

       <div className="flex-1 flex flex-col md:flex-row mt-20 relative z-10">
          <div className="md:w-1/2 flex items-center justify-center relative">
              <h2 className="text-[18vw] font-black uppercase leading-none tracking-tighter mix-blend-difference relative z-10">
                REACH <br/> OUT
              </h2>
              {/* Glove placeholder */}
              <motion.div 
                 animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute w-48 h-64 bg-b-black rounded-3xl z-20 border-8 border-gray-800 shadow-2xl flex flex-col items-center pt-8 hover:scale-105 cursor-pointer"
              >
                  <div className="w-12 h-12 bg-b-yellow text-black font-black flex items-center justify-center rounded-lg text-2xl border-4 border-black">
                    X
                  </div>
                  <div className="mt-auto w-full h-16 bg-gray-900 text-white flex items-center justify-center rounded-b-xl border-t-2 border-gray-700 font-mono text-xs">
                     GLOVE.MDL
                  </div>
              </motion.div>
          </div>
          
          <div className="md:w-1/2 mt-20 md:mt-0 flex flex-col justify-center">
             <div className="border-b-4 border-b-black pb-8 mb-8">
               <h3 className="text-3xl md:text-5xl font-black uppercase mb-4">
                 Wanna jam on a project together? <br/>
                 Wanna catch up for a chat? A coffee? A beer? <br/>
                 Think you'd make a good butterhead?
               </h3>
             </div>

             <form className="flex flex-col gap-8 w-full max-w-xl">
               <div className="flex gap-8">
                 <div className="flex-1 border-b-2 border-b-black pb-2">
                   <label className="text-xs font-bold font-mono block mb-2">NAME *</label>
                   <input type="text" className="w-full bg-transparent outline-none font-bold placeholder-black/30" placeholder="Jane Doe" required />
                 </div>
                 <div className="flex-1 border-b-2 border-b-black pb-2">
                   <label className="text-xs font-bold font-mono block mb-2">EMAIL *</label>
                   <input type="email" className="w-full bg-transparent outline-none font-bold placeholder-black/30" placeholder="jane@example.com" required />
                 </div>
               </div>
               
               <div className="border-b-2 border-b-black pb-2">
                 <label className="text-xs font-bold font-mono block mb-2">COMPANY</label>
                 <input type="text" className="w-full bg-transparent outline-none font-bold placeholder-black/30" placeholder="Awesome Inc." />
               </div>

               <div className="border-b-2 border-b-black pb-2">
                 <label className="text-xs font-bold font-mono block mb-2">WHAT'S UP? *</label>
                 <textarea className="w-full bg-transparent outline-none font-bold placeholder-black/30 resize-none" rows={1} placeholder="Tell us about your project..."></textarea>
               </div>

               <button type="submit" className="self-start text-xs font-bold font-mono flex items-center gap-2 hover:opacity-50 transition-opacity">
                  SAY HI <ArrowRight size={16} />
               </button>
             </form>

             <div className="mt-16 flex justify-between items-center text-xs font-bold font-mono">
                <button className="hover:opacity-50 transition-opacity">SIGN UP TO OUR NEWSLETTER</button>
                <div className="flex gap-4">
                  <a href="#" className="hover:opacity-50">IG ↗</a>
                  <a href="#" className="hover:opacity-50">X ↗</a>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       if (target.closest('button') || target.closest('a') || target.closest('.cursor-pointer')) {
          setIsHovering(true);
       } else {
          setIsHovering(false);
       }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-black mix-blend-difference pointer-events-none z-[100] flex items-center justify-center bg-white/20 backdrop-blur-xs"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)'
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    >
       {isHovering && <Plus size={12} className="text-black" />}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="bg-b-yellow min-h-screen text-b-black selection:bg-b-black selection:text-b-yellow sm:cursor-none">
      <Cursor />
      <Hero />
      <WhoWeAre />
      <Projects />
      <AllWorks />
      
      <div className="bg-b-black text-white p-10 md:p-20 border-b border-white/20">
         <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/3 mb-10 md:mb-0">
               <h3 className="font-bold mb-4 uppercase">Awards & Recognition</h3>
               <div className="grid grid-cols-2 gap-4 font-black text-2xl uppercase">
                 <div>AWWWARDS</div> <div className="text-b-yellow">×5</div>
                 <div>FWA</div> <div className="text-b-yellow">×11</div>
                 <div>CSSDA</div> <div className="text-b-yellow">×10</div>
                 <div>& MORE</div> <div className="text-b-yellow">×4</div>
               </div>
            </div>
            <div className="w-full md:w-1/3">
               <h3 className="font-bold mb-4 uppercase">Our locations</h3>
               <div className="grid grid-cols-2 gap-4 font-black text-2xl uppercase text-right md:text-left">
                 <div className="col-span-2 text-right md:text-left text-xl opacity-50 font-medium mb-4 normal-case max-w-sm">We love recognition, it's just a part of our industry, so we just wanted to share how much we've had in our short history.</div>
                 <div>THE AMERICAS</div> <div className="text-b-yellow">×20</div>
                 <div>EUROPE</div> <div className="text-b-yellow">×15</div>
                 <div>ASIA</div> <div className="text-b-yellow">×2</div>
                 <div>OCEANIA</div> <div className="text-b-yellow">×4</div>
               </div>
            </div>
         </div>
      </div>
      
      <Contact />
    </div>
  );
}
