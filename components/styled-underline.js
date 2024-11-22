import React from 'react';

const UnderlineStyles = {
  solid: 'after:h-0.5 after:bg-current',
  dashed: 'after:h-0.5 after:bg-current after:bg-clip-content after:border-b-2 after:border-dashed after:border-current',
  dotted: 'after:h-0.5 after:bg-current after:bg-clip-content after:border-b-2 after:border-dotted after:border-current',
  double: 'after:h-[3px] after:border-t after:border-b after:border-current',
  wavy: 'decoration-wavy underline underline-offset-4',
  gradient: 'bg-gradient-to-r from-current to-transparent bg-no-repeat [background-position:0_88%] [background-size:100%_0.2em]',
  highlight: 'bg-current bg-opacity-20',
  neon: 'relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:blur-[2px] after:opacity-75',
};

const ColorVariants = {
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
  yellow: 'text-yellow-400',
  red: 'text-red-400',
  blue: 'text-blue-400',
};

export function StyledUnderline({ 
  children, 
  style = 'solid', 
  color = 'cyan', 
  className = '',
  as: Component = 'span'
}) {
  const underlineStyle = UnderlineStyles[style] || UnderlineStyles.solid;
  const colorVariant = ColorVariants[color] || ColorVariants.cyan;

  const classes = `
    relative inline-block
    ${underlineStyle}
    ${colorVariant}
    ${style !== 'wavy' && style !== 'gradient' && style !== 'highlight' ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:content-[""]' : ''}
    ${className}
  `;

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
}

export function WavyUnderlineSVG({ children, color = 'cyan', className = '' }) {
  const colorVariant = ColorVariants[color] || ColorVariants.cyan;

  return (
    <span className={`relative inline-block ${colorVariant} ${className}`}>
      {children}
      <svg className="absolute left-0 bottom-0 w-full h-2 overflow-visible" preserveAspectRatio="none">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M0,16 Q5,-5 10,16 T20,16 T30,16 T40,16 T50,16 T60,16 T70,16 T80,16 T90,16 T100,16"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

