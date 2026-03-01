import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { getBlogPostBySlug, getAllBlogPostSlugs } from "@/lib/blog-posts"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { ShareButton } from "./share-button"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post não encontrado",
    }
  }

  return {
    title: `${post.title} | DRYON`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
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
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const Icon = post.icon

  return (
    <div className="min-h-screen" style={{ background: "var(--color-background)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl border-b shadow-sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/home" className="flex items-center">
              <Image
                src="/images/design-mode/Captura_de_Tela_2025-11-07_a%CC%80s_12.44.54-removebg-preview%20%281%29(6).png"
                alt="DryOn Logo"
                width={160}
                height={36}
                className="w-auto h-8 sm:h-10"
                priority
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12 pb-8 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <Link
              href="/home#dicas"
              className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors"
              style={{ color: "var(--color-primary)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para dicas
            </Link>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl"
                style={{ background: "var(--color-primary)" }}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>5 min de leitura</span>
                </div>
              </div>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-balance font-[family-name:var(--font-bebas)]"
              style={{ color: "var(--color-primary)" }}
            >
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty mb-6 sm:mb-8">
              {post.subtitle}
            </p>

            <div className="grid gap-6 sm:gap-8 items-start mb-8 sm:mb-12">
              {/* Description */}
              <div className="space-y-6">
                <p
                  className="text-base sm:text-lg leading-relaxed text-pretty"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {post.description}
                </p>

                <div
                  className="p-6 rounded-xl border-l-4"
                  style={{
                    backgroundColor: "rgba(59, 130, 246, 0.05)",
                    borderColor: "var(--color-primary)",
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-3 font-[family-name:var(--font-bebas)]"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Destaques do Artigo
                  </h3>
                  <ul className="space-y-2">
                    {post.content.map((section, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                          style={{ background: "var(--color-secondary)" }}
                        />
                        <span className="text-sm text-muted-foreground">{section.subtitle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}>
                    <div
                      className="text-2xl font-bold font-[family-name:var(--font-bebas)]"
                      style={{ color: "var(--color-primary)" }}
                    >
                      5 min
                    </div>
                    <div className="text-xs text-muted-foreground">de leitura</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}>
                    <div
                      className="text-2xl font-bold font-[family-name:var(--font-bebas)]"
                      style={{ color: "var(--color-primary)" }}
                    >
                      96h
                    </div>
                    <div className="text-xs text-muted-foreground">proteção DryOn</div>
                  </div>
                </div>
              </div>

              {/* Featured Image - Full Width */}
              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Sections */}
          <article className="prose prose-lg">
            {post.content.map((section, index) => (
              <div key={index} className="mb-8 sm:mb-12">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance font-[family-name:var(--font-bebas)]"
                  style={{ color: "var(--color-primary)" }}
                >
                  {section.subtitle}
                </h2>

                {section.text && (
                  <p
                    className="text-base sm:text-lg leading-relaxed mb-4 text-pretty"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {section.text}
                  </p>
                )}

                {section.points && (
                  <ul className="space-y-3 sm:space-y-4 ml-4 sm:ml-6">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-3 sm:gap-4">
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 sm:mt-2.5"
                          style={{ background: "var(--color-secondary)" }}
                        />
                        <span
                          className="text-base sm:text-lg leading-relaxed text-pretty"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          {/* Product CTA */}
          <div
            className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-l-4"
            style={{
              background: "var(--color-primary)",
              borderColor: "var(--color-secondary)",
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white font-[family-name:var(--font-bebas)]">
              Conheça {post.productLineName}
            </h3>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed text-pretty">
              {post.productLineDescription}
            </p>
            <Link href="/home#produtos">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg font-semibold"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-secondary-foreground)",
                }}
              >
                Ver produtos
              </Button>
            </Link>
          </div>

          {/* Share Section */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <p className="text-base sm:text-lg font-semibold" style={{ color: "var(--color-primary)" }}>
                Gostou deste conteúdo? Compartilhe!
              </p>
              <ShareButton title={post.title} subtitle={post.subtitle} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
