import Link from 'next/link'
import { Search } from 'lucide-react'

const blogPosts = [
  {
    title: "Build Your First Computer Vision Project",
    date: "July 13, 2024",
    readTime: "2 min read",
    description: "Create a solo ping pong game using Python, OpenCV, and hand detection. Step by step guide included. Perfect for computer vision beginners",
    tags: ["computer-vision", "python", "opencv"]
  },
  {
    title: "Building Blazing-Fast Websites ft. Gatsby 🔥",
    date: "June 27, 2024",
    readTime: "3 min read",
    description: "Discover how to build fast, secure websites using Gatsby's static site generation, React, GraphQL, and a robust plugin system",
    tags: ["webdev", "gatsby", "static-site-generator"]
  },
  {
    title: "How AI is Transforming The World? 🌍",
    date: "September 05, 2023",
    readTime: "5 min read",
    description: "Explore the transformative power of Artificial Intelligence in our rapidly evolving world. From reshaping industries to enhancing education and transcending",
    tags: ["ai"]
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div className="py-12 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">All Publications</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-900 rounded-lg border border-gray-800 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.title} className="space-y-2">
            <h2 className="text-xl font-semibold hover:text-cyan-400">
              <Link href="#">{post.title}</Link>
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-gray-400">{post.description}</p>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="text-cyan-400 hover:underline text-sm"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </article>
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

