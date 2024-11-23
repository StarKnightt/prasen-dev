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
  const [isHovered, setIsHovered] = useState(false)

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
    const [containerWidth, setContainerWidth] = useState(0)
    const controls = useAnimation()

    useEffect(() => {
      const updateWidth = () => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.offsetWidth)
        }
      }

      updateWidth()
      window.addEventListener('resize', updateWidth)
      return () => window.removeEventListener('resize', updateWidth)
    }, [])

    useEffect(() => {
      if (containerWidth > 0 && !isPaused) {
        controls.start({
          x: reverse ? [0, -containerWidth] : [-containerWidth, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isHovered ? 30 : 20,
              ease: "linear",
            },
          },
        })
      } else {
        controls.stop()
      }
    }, [containerWidth, controls, reverse, isPaused, isHovered])

    return (
      <div 
        ref={containerRef} 
        className="relative overflow-hidden py-2"
        role="region"
        aria-label={`Scrolling tech stack ${reverse ? 'reverse' : 'forward'}`}
      >
        <motion.div
          className="flex absolute"
          animate={controls}
        >
          {[...items, ...items].map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2 px-4 py-2 mx-2 rounded-full bg-gray-800 border border-gray-600 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              role="listitem"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <item.Icon 
                  size={20} 
                  className="text-white" // Changed from text-cyan-400 to text-white for better visibility
                  aria-hidden="true"
                />
              </div>
              <span className="text-sm text-white font-medium whitespace-nowrap"> 
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <div 
      className="w-full overflow-hidden bg-black py-8 relative" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <div className="flex flex-col gap-4">
          <ScrollingRow items={row1} />
          <ScrollingRow items={row2} reverse />
        </div>
      </div>
      
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-gray-800 border border-gray-600 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
        aria-label={isPaused ? "Resume animation" : "Pause animation"}
      >
        <AnimatePresence mode="wait">
          {isPaused ? (
            <Play className="w-4 h-4 text-white" /> 
          ) : (
            <Pause className="w-4 h-4 text-white" /> 
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}