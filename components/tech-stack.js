export function TechStack() {
  const technologies = [
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png' },
    { name: 'Next.js', icon: '/next-js.svg' },
    { name: 'React.js', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png' },
    { name: 'TailwindCSS', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png' },
    { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png' },
    { name: 'C++', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png' },
    { name: 'CS', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png' },
    { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png' },
    { name: 'Prisma', icon: '/prisma.svg' },
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png' },
    { name: 'Firebase', icon: '/firebase.svg' },
    { name: 'AI', icon: '/ai.svg' },
    { name: 'Nginx', icon: '/nginx.svg' },
    { name: 'Express', icon: '/express.svg' },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="px-3 py-1.5 bg-gray-900/50 rounded-lg border border-gray-800 flex items-center gap-2"
        >
          <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
          <span className="text-sm text-gray-300">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}

