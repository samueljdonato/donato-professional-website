import { getWritingBySlug, getAllWritings } from '@/lib/mdx'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/mdx-content'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const writings = getAllWritings()
  return writings.map((writing) => ({
    slug: writing.slug,
  }))
}

export default async function WritingPage({ params }: PageProps) {
  const { slug } = await params
  const writing = getWritingBySlug(slug)
  
  if (!writing) {
    notFound()
  }

  return (
    <main className="min-h-screen px-1 py-4 sm:px-2 lg:px-3">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {writing.title}
        </h1>

        {writing.author && (
          <p className="text-lg text-gray-700 mb-2">{writing.author}</p>
        )}

        <div className="text-gray-600 mb-8">
          {writing.date && !isNaN(new Date(writing.date).getTime()) && (
            <span>{new Date(writing.date).toLocaleDateString()} • </span>
          )}
          {writing.tags.map(tag => (
            <span key={tag} className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="prose prose-lg max-w-none">
          <MDXContent source={writing.content} />
        </div>
        
        <Link href="/writings" className="mt-12 inline-block text-blue-600 hover:underline">
          ← Back to writings
        </Link>
      </article>
    </main>
  )
}