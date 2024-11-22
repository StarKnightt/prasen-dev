import { ProjectCard } from '@/components/project-card'
import { Search } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: "Nykaa Product Advisor",
    description: "Web scraping application enhanced with AI that helps users to find the best product for their skin type and concerns.",
    tags: ["Python", "Selenium", "Beautiful Soup", "TailwindCSS", "Flask", "Gemini"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "DesiNFT",
    description: "NFT marketplace promoting Indian culture. Mint, buy and sell NFTs with a user-friendly, responsive interface.",
    tags: ["Next.js", "TailwindCSS", "Polygon", "Solidity", "Chai.js"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Cryptonic Labs",
    description: "Dark-themed modern animated agency landing page with integrated content management system.",
    tags: ["Next.js", "GSAP", "Framer", "TailwindCSS", "Sanity.io"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "WattX",
    description: "Landing page for a blockchain-based energy trading platform with a modern design and smooth animations.",
    tags: ["Next.js", "Framer", "TailwindCSS", "Clerk"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Koober",
    description: "Your personal financial advisor powered by AI. Delivers advice tailored to your unique income, budget, and expenses.",
    tags: ["Next.js", "PostgreSQL", "TailwindCSS", "TypeScript", "Gemini"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "WebGT",
    description: "Web terminal interface that replicates my home build's terminal. Supports over 50 unique commands.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#"
  }
]

export default function Projects() {
  return (
    <div className="py-12 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">All Projects</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-900 rounded-lg border border-gray-800 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-800 flex justify-between text-sm text-gray-400">
        <div>© 2024 Developed with ❤️ by Ayush</div>
        <div className="space-x-4">
          <Link href="/rss" className="hover:text-cyan-400">RSS FEED</Link>
          <span>/</span>
          <Link href="/sitemap" className="hover:text-cyan-400">SITE MAP</Link>
        </div>
      </footer>
    </div>
  )
}

