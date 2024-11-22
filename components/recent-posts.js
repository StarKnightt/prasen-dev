import Link from 'next/link'

const recentPosts = [
  {
    title: "The Ultimate AI for Segmenting Anything, Anywhere",
    date: "September 30, 2024",
    readTime: "5 min read",
    description: "Discover META's revolutionary Segment Anything Model (SAM), an AI model capable of identifying and outlining any object in an image effortlessly",
    tags: ["ml", "image-segmentation"]
  },
  {
    title: "LinkedIn Scraping with Python and Proxycurl API",
    date: "August 21, 2024",
    readTime: "3 min read",
    description: "Learn how to scrape LinkedIn profiles using Python and Proxycurl API, including setup, API configuration, and handling responses",
    tags: ["web-scraping", "python"]
  },
  {
    title: "Build Your First Computer Vision Project",
    date: "July 13, 2024",
    readTime: "2 min read",
    description: "Create a solo ping pong game using Python, OpenCV, and hand detection. Step by step guide included. Perfect for computer vision beginners",
    tags: ["computer-vision", "python", "opencv"]
  }
]

export function RecentPosts() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold relative">
        Most recent posts
        <span className="absolute -bottom-2 left-0 w-32 h-1 bg-cyan-400/20"></span>
      </h2>
      <div className="space-y-8">
        {recentPosts.map((post) => (
          <article key={post.title} className="space-y-2">
            <Link href="#" className="group">
              <h3 className="text-xl font-semibold group-hover:text-cyan-400">{post.title}</h3>
            </Link>
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
    </section>
  )
}

