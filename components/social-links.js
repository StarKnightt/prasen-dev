import Link from 'next/link'
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react'

export function SocialLinks() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold relative">
        Follow me
        <span className="absolute -bottom-2 left-0 w-32 h-1 bg-cyan-400/20"></span>
      </h2>
      <div className="flex gap-4">
        <Link href="https://github.com/StarKnightt" className="text-gray-400 hover:text-cyan-400">
          <Github className="w-6 h-6" />
        </Link>
        <Link href="https://linkedin.com/in/prasenjitnayak/" className="text-gray-400 hover:text-cyan-400">
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link href="https://www.instagram.com/star_knight_____/" className="text-gray-400 hover:text-cyan-400">
          <Instagram className="w-6 h-6" />
        </Link>
        <Link href="https://youtube.com/@Star_Knight12" className="text-gray-400 hover:text-cyan-400">
          <Youtube className="w-6 h-6" />
        </Link>
      </div>
    </section>
  )
}

