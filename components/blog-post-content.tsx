"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Share2, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import type { BlogPost } from "@/lib/blog-posts"
import { SharePopup } from "@/components/share-popup"
import { BlogArticleSchema } from "@/components/blog-article-schema"

interface BlogPostContentProps {
  post: BlogPost
  onProductLineClick?: (productIndex: number) => void
}

export function BlogPostContent({ post, onProductLineClick }: BlogPostContentProps) {
  const router = useRouter()
  const [showSharePopup, setShowSharePopup] = useState(false)
  const Icon = post.icon

  const wordCount = post.content.reduce((acc, section) => {
    const textWords = section.text ? section.text.split(" ").length : 0
    const pointsWords = section.points ? section.points.join(" ").split(" ").length : 0
    return acc + textWords + pointsWords
  }, 0)
  const readingTime = Math.ceil(wordCount / 200)

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: `${post.subtitle}\n\nConfira essa dica incrível sobre cuidados com a pele!`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        setShowSharePopup(true)
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Erro ao compartilhar:", error)
        setShowSharePopup(true)
      }
    }
  }

  return (
    <>
      <BlogArticleSchema post={post} slug={post.slug} />

      <div className="min-h-screen bg-background">
        {/* Header with back button */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex-shrink-0 bg-secondary">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{readingTime} min de leitura</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-primary text-primary-foreground">
                  {post.badge}
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-balance text-primary">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty">
              {post.subtitle}
            </p>
          </motion.div>

          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 sm:mb-12 rounded-2xl overflow-hidden"
          >
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 sm:mb-12 p-6 sm:p-8 rounded-xl bg-secondary/50"
          >
            <p className="text-base sm:text-lg leading-relaxed text-pretty">{post.description}</p>
          </motion.div>

          {/* Content sections */}
          <div className="space-y-8 sm:space-y-12">
            {post.content.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-start gap-3 text-balance text-primary">
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm font-bold flex items-center justify-center bg-secondary text-primary">
                    {idx + 1}
                  </span>
                  <span className="leading-tight">{section.subtitle}</span>
                </h2>

                {section.text && (
                  <p className="text-base sm:text-lg leading-relaxed text-pretty text-foreground">{section.text}</p>
                )}

                {section.points && (
                  <ul className="space-y-3 pl-11 sm:pl-13">
                    {section.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-secondary" />
                        <span className="text-base sm:text-lg leading-relaxed text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Product line CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-xl bg-secondary"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-primary">
                  Conheça a linha {post.productLineName}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">{post.productLineDescription}</p>
              </div>
              {onProductLineClick ? (
                <button
                  onClick={() => onProductLineClick(post.productLineIndex)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold uppercase tracking-wide text-base transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap bg-primary text-primary-foreground"
                >
                  Ver Produtos
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <Link
                  href="/home#produtos"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold uppercase tracking-wide text-base transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap bg-primary text-primary-foreground"
                >
                  Ver Produtos
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </motion.div>
        </article>

        {/* Share popup */}
        {showSharePopup && <SharePopup onClose={() => setShowSharePopup(false)} />}
      </div>
    </>
  )
}
