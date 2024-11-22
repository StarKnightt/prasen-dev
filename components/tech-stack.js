import { StyledUnderline } from './styled-underline'

export function TechStack() {
  const technologies = [
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Next.js', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'C++', icon: '🔧' },
    { name: 'CS', icon: '🎮' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Prisma', icon: '💎' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'AI', icon: '🤖' },
    { name: 'Nginx', icon: '🌐' },
    { name: 'Express', icon: '🚂' },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="px-3 py-1.5 bg-gray-900/50 rounded-lg border border-gray-800 flex items-center gap-2 hover:bg-gray-800/50 transition-colors duration-200"
        >
          <span>{tech.icon}</span>
          <StyledUnderline style="gradient" color="cyan">
            <span className="text-sm">{tech.name}</span>
          </StyledUnderline>
        </div>
      ))}
    </div>
  )
}

