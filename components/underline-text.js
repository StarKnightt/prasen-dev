import React from 'react'

export function UnderlineText({ children, type = 'default', color = 'cyan', className = '' }) {
  const colors = {
    cyan: 'text-cyan-400 after:bg-cyan-400',
    purple: 'text-purple-400 after:bg-purple-400',
    green: 'text-green-400 after:bg-green-400',
    yellow: 'text-yellow-400 after:bg-yellow-400',
  }

  const types = {
    default: 'after:h-0.5 after:bottom-0',
    thick: 'after:h-1 after:bottom-0',
    dashed: 'after:h-0.5 after:bottom-0 after:dashed',
    wavy: 'wavy-underline',
    gradient: `bg-gradient-to-r from-${color}-400 to-${color}-600 bg-no-repeat [background-position:0_88%] [background-size:100%_0.2em]`,
    highlight: `bg-${color}-400/20`,
  }

  const baseClasses = 'relative inline-block'
  const underlineClasses = 'after:absolute after:left-0 after:w-full after:content-[""]'

  let combinedClasses = `${baseClasses} ${className} `

  if (type === 'wavy') {
    combinedClasses += `${types[type]} ${colors[color]}`
  } else if (type === 'gradient' || type === 'highlight') {
    combinedClasses += `${types[type]}`
  } else {
    combinedClasses += `${underlineClasses} ${types[type]} ${colors[color]}`
  }

  return <span className={combinedClasses}>{children}</span>
}

export function WavyUnderline({ children, className = '' }) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg className="absolute left-0 bottom-0.5 w-full h-2 text-cyan-400/20" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path fill="none" stroke="currentColor" strokeWidth="4" d="M0,16 Q25,0 50,16 T100,16" />
      </svg>
    </span>
  )
}

