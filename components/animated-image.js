'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Sparkles, Camera } from 'lucide-react'

export function AnimatedImage({ 
  src, 
  alt, 
  width, 
  height,
  borderColor = "#0FF"
}) {
  const controls = useAnimation()

  // Continuous floating animation
  useEffect(() => {
    controls.start({
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  }, [controls])

  return (
    <motion.div
      className="relative"
      animate={controls}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Animated border container */}
      <div className="relative p-1 rounded-lg">
        {/* Glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-lg opacity-50"
          animate={{
            boxShadow: [
              "0 0 20px rgba(6, 182, 212, 0.3)",
              "0 0 30px rgba(6, 182, 212, 0.5)",
              "0 0 20px rgba(6, 182, 212, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
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
            className="absolute bg-cyan-500"
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
            className="rounded-lg"
            quality={100}
            style={{
              colorSpace: 'srgb'
            }}
          />
        </div>

        {/* Decorative corner icons with pulse animation */}
        <motion.div
          className="absolute -top-2 -left-2 bg-cyan-500 rounded-full p-2 shadow-lg shadow-cyan-500/50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="text-white w-4 h-4" />
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -right-2 bg-cyan-500 rounded-full p-2 shadow-lg shadow-cyan-500/50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Camera className="text-white w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AnimatedImage

