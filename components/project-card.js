import Image from 'next/image'
import Link from 'next/link'

export function ProjectCard({ title, description, tags, image, liveUrl, repoUrl }) {
  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        className="w-full object-cover aspect-video"
      />
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400">{description}</p>
        <div className="flex gap-4">
          <Link
            href={liveUrl}
            className="text-cyan-400 hover:underline text-sm flex items-center gap-1"
          >
            Live Preview
          </Link>
          <Link
            href={repoUrl}
            className="text-cyan-400 hover:underline text-sm flex items-center gap-1"
          >
            Repo URL
          </Link>
        </div>
      </div>
    </div>
  )
}

