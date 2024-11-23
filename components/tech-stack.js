'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiBootstrap, 
  SiCplusplus, SiCss3, SiC, SiPython, SiSolidity, 
  SiKeras, SiBun, SiFlask, SiArchlinux, SiMongodb, 
  SiPostgresql, SiNodedotjs
} from 'react-icons/si'
import { Pause, Play } from 'lucide-react'

export function TechStack() {
  const [isPaused, setIsPaused] = useState(false)

  const row1 = [
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'React.js', Icon: SiReact },
    { name: 'TailwindCSS', Icon: SiTailwindcss },
    { name: 'Bootstrap', Icon: SiBootstrap },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'CSS', Icon: SiCss3 },
    { name: 'C', Icon: SiC },
    { name: 'Python', Icon: SiPython }
  ]

  const row2 = [
    { name: 'Solidity', Icon: SiSolidity },
    { name: 'Keras', Icon: SiKeras },
    { name: 'Bun', Icon: SiBun },
    { name: 'Flask', Icon: SiFlask },
    { name: 'Arch Linux', Icon: SiArchlinux },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'Node.js', Icon: SiNodedotjs }
  ]

  const ScrollingRow = ({ items, reverse = false }) => {
    const containerRef = useRef(null)
    const controls = useAnimation()

    useEffect(() => {
      const animateRow = () => {
        const rowWidth = containerRef.current ? containerRef.current.scrollWidth / 2 : 0

        controls.start({
          x: reverse ? [0, -rowWidth] : [-rowWidth, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          },
        })
      }

      if (!isPaused) {
        animateRow()
      } else {
        controls.stop()
      }
    }, [controls, reverse, isPaused])

    return (
      <div 
        ref={containerRef} 
        className="relative overflow-hidden py-2 h-16"
      >
        <motion.div
          className="flex absolute left-0"
          animate={controls}
        >
          {[...items, ...items].map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2 px-4 py-2 mx-2 rounded-full bg-gray-800 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center relative z-10">
                <item.Icon 
                  size={20} 
                  className="text-cyan-400"
                />
              </div>
              <span className="text-sm text-gray-100 font-medium whitespace-nowrap relative z-10">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="w-full overflow-hidden bg-black/80 py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <div className="flex flex-col gap-4">
          <ScrollingRow items={row1} />
          <ScrollingRow items={row2} reverse />
        </div>
      </div>
      
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-gray-900/90 border border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/20 transition-all z-20"
        aria-label={isPaused ? "Resume animation" : "Pause animation"}
      >
        <AnimatePresence mode="wait">
          {isPaused ? (
            <motion.div
              key="play"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex justify-center items-center"
            >
              <Play className="w-4 h-4 text-cyan-400" />
            </motion.div>
          ) : (
            <motion.div
              key="pause"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex justify-center items-center"
            >
              <Pause className="w-4 h-4 text-cyan-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
