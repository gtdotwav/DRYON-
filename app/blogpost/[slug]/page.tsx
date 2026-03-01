import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getBlogPostBySlug, getAllBlogPostSlugs } from "@/lib/blog-posts"
import { BlogPostContent } from "@/components/blog-post-content"

export async function generateStaticParams() {
  const slugs = getAllBlogPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post não encontrado",
    }
  }

  const baseUrl = "https://dryon.com.br"
  const canonicalUrl = `${baseUrl}/blogpost/${params.slug}`

  const wordCount = post.content.reduce((acc, section) => {
    const textWords = section.text ? section.text.split(" ").length : 0
    const pointsWords = section.points ? section.points.join(" ").split(" ").length : 0
    return acc + textWords + pointsWords
  }, 0)
  const readingTime = Math.ceil(wordCount / 200)

  return {
    title: `${post.title} | DRYON`,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      "DRYON",
      "desodorante",
      "cuidados com axilas",
      "transpiração",
      "proteção",
      post.productLineName,
      ...post.title.split(" ").slice(0, 3),
    ],
    authors: [{ name: "DRYON", url: baseUrl }],
    creator: "DRYON",
    publisher: "DRYON",
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["DRYON"],
      section: "Cuidados e Dicas",
      tags: ["saúde", "cuidados pessoais", "axilas", "transpiração"],
      url: canonicalUrl,
      siteName: "DRYON",
      locale: "pt_BR",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
      creator: "@dryon",
      site: "@dryon",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "article:reading_time": `${readingTime} minutos`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}
