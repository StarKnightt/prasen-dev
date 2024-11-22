'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { ZoomIn, Sparkles, Camera } from 'lucide-react'

export function AnimatedImage({ 
  src, 
  alt, 
  width, 
  height,
  borderColor = "#0FF",
  glowColor = "cyan"
}) {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: isHovered ? 1.02 : 1,
      transition: { duration: 0.3 }
    })
  }, [isHovered, controls])

  return (
    <motion.div
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated border container */}
      <div className="relative p-1 rounded-lg">
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl" />
        
        {/* Corner decorations */}
        {[0, 1, 2, 3].map((corner) => (
          <motion.div
            key={corner}
            className="absolute w-8 h-8"
            style={{
              top: corner < 2 ? -4 : 'auto',
              bottom: corner >= 2 ? -4 : 'auto',
              left: corner % 2 === 0 ? -4 : 'auto',
              right: corner % 2 === 1 ? -4 : 'auto',
            }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ rotate: corner * 90 }}
              animate={{
                rotate: [corner * 90, (corner + 1) * 90],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32">
                <motion.path
                  d="M1 1 L12 1 L12 4"
                  stroke={borderColor}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
        ))}

        {/* Animated border lines */}
        {['top', 'right', 'bottom', 'left'].map((side, index) => (
          <motion.div
            key={side}
            className="absolute bg-gradient-to-r from-cyan-500 to-purple-500"
            style={{
              [side]: 0,
              [side === 'top' || side === 'bottom' ? 'left' : 'top']: '15%',
              width: side === 'top' || side === 'bottom' ? '70%' : '2px',
              height: side === 'left' || side === 'right' ? '70%' : '2px',
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}

        {/* Main image */}
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-lg transition-all duration-300"
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg flex items-center justify-center opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: isHovered ? 1 : 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <ZoomIn className="text-white w-10 h-10" />
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative corner icons */}
        <motion.div
          className="absolute -top-2 -left-2 bg-cyan-400 rounded-full p-2 shadow-lg shadow-cyan-500/50"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          <Sparkles className="text-white w-4 h-4" />
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -right-2 bg-purple-400 rounded-full p-2 shadow-lg shadow-purple-500/50"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          <Camera className="text-white w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AnimatedImage