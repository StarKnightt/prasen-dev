import Image from 'next/image'
import Link from 'next/link'
import { ProjectCard } from '@/components/project-card'
import { TechStack } from '@/components/tech-stack'
import { RecentPosts } from '@/components/recent-posts'
import { ContactForm } from '@/components/contact-form'
import { SocialLinks } from '@/components/social-links'
import { UnderLineText } from '@/components/underline-text'

export default function Home() {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl font-bold">Prasenjit Nayak</h1>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="text-gray-400">
              Hello! I'm a developer from Odisha, India. I enjoy to make projects and exploring
              technology. I completed my  <Link href="https://www.linkedin.com/school/trident-academy-of-technology-tat-bhubaneswar/posts/?feedView=all" className="text-cyan-400 hover:underline"> B.tech degeree</Link> in Computer Science and information technology.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">What I do?</h2>

            <p className="text-gray-400">
              Currently, I'm learing <Link href="https://github.com/StarKnightt/Next.JS-Learning" className="text-cyan-400 hover:underline">Next.js</Link>. 
              I'm super active on X, where I share my thoughts and projects too <Link href="#" className="text-cyan-400 hover:underline">#BuildInPublic</Link>.
            </p>

            <p className="text-gray-400">
              I'm an <Link href="https://x.com/Star_Knight12" className="text-cyan-400 hover:underline">X creator</Link>, 
              a maintainer and contributor of open-source projects. When not coding, 
              I read books, go out for a run or watch on YouTube.
            </p>
            <p className="text-gray-400">
              I'm <Link href="#" className="text-cyan-400 hover:underline">open to work</Link>, 
              freelance, or collaborate. <Link href="#" className="text-cyan-400 hover:underline">Contact Me</Link>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Tools that I have used</h2>
            <TechStack />
          </section>
        </div>

        <div className="md:w-96">
          <Image
            src="/placeholder.svg"
            alt="Ayush Kumar Singh"
            width={400}
            height={400}
            className="rounded-lg border-2 border-cyan-400/20"
          />
        </div>
      </div>

      <section className="mt-16 space-y-8">
        <h2 className="text-2xl font-semibold relative">
          Featured Projects
          <span className="absolute -bottom-2 left-0 w-32 h-1 bg-cyan-400/20"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Nykaa Product Advisor"
            description="Web scraping application enhanced with AI that helps users to find the best product for their skin type and concerns."
            tags={['Python', 'Selenium', 'Beautiful Soup', 'TailwindCSS', 'Flask', 'Gemini']}
            image="/placeholder.svg"
            liveUrl="#"
            repoUrl="#"
          />
          <ProjectCard
            title="DesiNFT"
            description="NFT marketplace promoting Indian culture. Mint, buy and sell NFTs with a user-friendly, responsive interface."
            tags={['Next.js', 'TailwindCSS', 'Polygon', 'Solidity', 'Chai.js']}
            image="/placeholder.svg"
            liveUrl="#"
            repoUrl="#"
          />
        </div>
      </section>

      <div className="mt-16">
        <RecentPosts />
      </div>

      <div className="mt-16">
        <ContactForm />
      </div>

      <div className="mt-16">
        <SocialLinks />
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-800 flex justify-between text-sm text-gray-400">
        <div>© 2024 Developed with ❤️ by Prasen</div>
      </footer>
    </div>
  )
}

