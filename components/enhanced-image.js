'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

export function EnhancedImage({ src, alt, width, height }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg border-2 border-cyan-400/20 shadow-lg shadow-cyan-400/20 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-cyan-400/40"
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 transition-opacity duration-300"
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <ZoomIn className="text-white w-10 h-10" />
      </motion.div>
    </motion.div>
  )
}

