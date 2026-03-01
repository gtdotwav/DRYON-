import type { BlogPost } from "@/lib/blog-posts"

interface BlogArticleSchemaProps {
  post: BlogPost
  slug: string
}

export function BlogArticleSchema({ post, slug }: BlogArticleSchemaProps) {
  const baseUrl = "https://dryon.com.br"
  const articleUrl = `${baseUrl}/blogpost/${slug}`

  // Calculate word count for reading time
  const wordCount = post.content.reduce((acc, section) => {
    const textWords = section.text ? section.text.split(" ").length : 0
    const pointsWords = section.points ? section.points.join(" ").split(" ").length : 0
    return acc + textWords + pointsWords
  }, 0)

  // Convert date format from DD/MM/YYYY to ISO format
  const [day, month, year] = post.date.split("/")
  const isoDate = `${year}-${month}-${day}T09:00:00-03:00`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: "DRYON",
      url: baseUrl,
      logo: `${baseUrl}/favicon.png`,
    },
    publisher: {
      "@type": "Organization",
      name: "DRYON",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    articleSection: "Cuidados e Dicas",
    keywords: ["cuidados pessoais", "saúde", "axilas", "transpiração", "DRYON"],
    wordCount: wordCount,
    articleBody: post.content.map((section) => section.text || section.points?.join(" ")).join(" "),
    inLanguage: "pt-BR",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/home#blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
