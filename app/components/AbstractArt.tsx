import React from 'react';

interface AbstractArtProps {
  index: number;
}

export function AbstractArt({ index }: AbstractArtProps) {
  // Cycle through 7 highly distinct patterns
  const patternType = index % 7;
  
  switch (patternType) {
    case 0:
      // Pattern 1: Glowing Orb
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blue-500/50 via-purple-500/50 to-pink-500/50 blur-2xl group-hover/image:scale-125 group-hover/image:opacity-100 transition-all duration-1000 ease-out opacity-80" />
        </div>
      );
    case 1:
      // Pattern 2: Glass Wireframe Dashboard
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent overflow-hidden [perspective:1000px]">
          <div className="w-56 h-36 border border-neutral-300 dark:border-neutral-700 rounded-xl p-5 flex flex-col gap-3 -rotate-6 group-hover/image:rotate-0 group-hover/image:scale-110 transition-all duration-700 bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-2xl dark:shadow-none">
            <div className="w-1/3 h-2.5 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
            <div className="w-full h-12 bg-neutral-300 dark:bg-neutral-700/80 rounded-lg" />
            <div className="flex gap-2.5 mt-auto">
               <div className="w-1/2 h-3.5 bg-neutral-300 dark:bg-neutral-700/80 rounded" />
               <div className="w-1/2 h-3.5 bg-neutral-300 dark:bg-neutral-700/80 rounded" />
            </div>
          </div>
        </div>
      );
    case 2:
      // Pattern 3: Layered Floating Cards
      return (
        <div className="absolute inset-0 bg-transparent overflow-hidden flex items-center justify-center [perspective:1000px]">
          <div className="relative w-48 h-32 group-hover/image:scale-110 transition-transform duration-700">
             <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-xl shadow-lg transform rotate-6 translate-x-4 translate-y-4 opacity-50 transition-all duration-700 group-hover/image:rotate-12 group-hover/image:translate-x-6 group-hover/image:translate-y-6" />
             <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-700 rounded-xl shadow-xl transform -rotate-3 -translate-x-2 -translate-y-2 opacity-70 transition-all duration-700 group-hover/image:-rotate-6 group-hover/image:-translate-x-4 group-hover/image:-translate-y-4" />
             <div className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 flex flex-col p-4 gap-2 transition-all duration-700 z-10">
                <div className="w-1/2 h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
                <div className="w-3/4 h-2 bg-neutral-100 dark:bg-neutral-800/50 rounded-full mt-2" />
                <div className="w-5/6 h-2 bg-neutral-100 dark:bg-neutral-800/50 rounded-full" />
             </div>
          </div>
        </div>
      );
    case 3:
      // Pattern 4: Mesh Fluid Gradient (Teal/Blue/Fuchsia)
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent overflow-hidden">
          <div className="w-[120%] h-[120%] absolute bg-gradient-to-br from-teal-400/40 via-[#47a3f3]/30 to-fuchsia-500/40 blur-2xl scale-110 group-hover/image:rotate-12 group-hover/image:scale-125 transition-transform duration-[1500ms] ease-in-out" />
        </div>
      );
    case 4:
      // Pattern 5: Diagonal Neon Speedlines
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent overflow-hidden">
          <div className="absolute inset-[-50%] flex transform rotate-45 gap-4 md:gap-6 opacity-60 group-hover/image:scale-110 transition-transform duration-1000 items-center justify-center">
             <div className="h-full w-4 md:w-6 bg-gradient-to-b from-transparent via-[#47a3f3]/60 to-transparent translate-y-12" />
             <div className="h-full w-8 md:w-10 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent -translate-y-8" />
             <div className="h-full w-2 md:w-3 bg-gradient-to-b from-transparent via-teal-400/50 to-transparent -translate-y-24" />
             <div className="h-full w-12 md:w-16 bg-gradient-to-b from-transparent via-fuchsia-500/30 to-transparent translate-y-16" />
             <div className="h-full w-6 md:w-8 bg-gradient-to-b from-transparent via-[#4c97f8]/50 to-transparent -translate-y-4" />
          </div>
        </div>
      );
    case 5:
      // Pattern 6: Floating 3D Cubes
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent overflow-hidden">
          <div className="relative w-full h-full group-hover/image:scale-110 transition-transform duration-1000">
             <div className="absolute top-1/4 left-[20%] w-12 h-12 rounded-lg bg-indigo-500/50 backdrop-blur-sm -rotate-12 group-hover/image:-translate-y-4 group-hover/image:rotate-12 transition-all duration-700 shadow-xl" />
             <div className="absolute top-[40%] left-1/2 w-20 h-20 rounded-xl bg-teal-400/40 backdrop-blur-md rotate-12 -translate-x-1/2 group-hover/image:-translate-y-2 group-hover/image:rotate-45 transition-all duration-[1200ms] shadow-2xl" />
             <div className="absolute bottom-[20%] right-[20%] w-16 h-16 rounded-lg bg-rose-500/40 backdrop-blur-sm -rotate-6 group-hover/image:translate-y-4 group-hover/image:-rotate-12 transition-all duration-1000 shadow-xl" />
          </div>
        </div>
      );
    case 6:
      // Pattern 7: Code Snippet Wireframe
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent overflow-hidden">
           <div className="w-56 md:w-64 h-auto p-4 md:p-5 font-mono text-xs font-bold flex flex-col gap-2 group-hover/image:scale-110 transition-transform duration-700 opacity-60 group-hover/image:opacity-100 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-lg -rotate-2 group-hover/image:rotate-0">
              <div className="flex gap-2">
                 <span className="text-purple-500">const</span>
                 <span className="text-[#47a3f3]">build</span>
                 <span className="text-neutral-500 dark:text-neutral-400">=</span>
                 <span className="text-yellow-500">()</span>
                 <span className="text-neutral-500 dark:text-neutral-400">&gt;&#123;</span>
              </div>
              <div className="pl-4 flex flex-col gap-2 opacity-80 mt-1">
                 <div className="h-2 w-24 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
                 <div className="h-2 w-16 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
                 <div className="h-2 w-32 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
              </div>
              <div className="text-neutral-500 dark:text-neutral-400 mt-1">&#125;;</div>
           </div>
        </div>
      );
    default:
      return null;
  }
}
