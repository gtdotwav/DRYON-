"use client"

import { Download, Share2, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CatalogoPage() {
  const pdfUrl = "https://drive.google.com/file/d/1L33Fdj3FmxGL192So9mPJwGq8rCu8asj/preview"
  const downloadUrl = "https://drive.google.com/file/d/1L33Fdj3FmxGL192So9mPJwGq8rCu8asj/view?usp=sharing"

  const handleDownload = () => {
    window.open(downloadUrl, "_blank")
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Catálogo DRYON",
          text: "Confira o catálogo completo de produtos DRYON",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Share cancelled")
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copiado para a área de transferência!")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-muted/20 flex flex-col">
      <header className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-2xl relative overflow-hidden">
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2">
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white transition-all hover:scale-105"
                aria-label="Compartilhar catálogo"
              >
                <Share2 size={18} className="sm:mr-2" />
                <span className="hidden sm:inline">Compartilhar</span>
              </Button>
              <Button
                onClick={handleDownload}
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-bold gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                aria-label="Baixar catálogo em PDF"
              >
                <Download size={18} />
                <span className="hidden xs:inline">Baixar PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="text-center mb-6 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <FileText className="text-primary" size={32} />
            <h1 className="text-3xl md:text-5xl font-bold text-primary lg:text-4xl text-balance">CATÁLOGO DRYON</h1>
          </div>
          <p className="text-gray-600 text-base md:text-xl mx-auto px-4 text-pretty">
            Produto que rende para um brasileiro que faz render.
          </p>
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-3 md:mt-4 text-xs md:text-sm text-gray-500 flex-wrap">
            <span className="flex items-center gap-2">
              <Eye size={16} />
              <span className="hidden xs:inline">Visualização interativa</span>
              <span className="xs:hidden">Visualizar</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Download size={16} />
              <span className="hidden xs:inline">Download disponível</span>
              <span className="xs:hidden">Download</span>
            </span>
          </div>
        </div>

        <Card className="bg-white shadow-2xl overflow-hidden border-4 border-primary/20 hover:shadow-3xl transition-shadow duration-300">
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-2 md:p-4 lg:p-8">
            <div
              className="bg-white rounded-lg shadow-inner overflow-hidden border border-gray-200"
              style={{ aspectRatio: "210/297" }}
            >
              <iframe
                src={pdfUrl}
                className="w-full h-full min-h-[500px] md:min-h-[700px] lg:min-h-[900px]"
                title="Catálogo DRYON - Visualização de PDF"
                allow="autoplay"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-dark px-4 md:px-6 py-3 border-t-4 border-secondary">
            <div className="flex items-center justify-between text-white/70 text-xs md:text-sm flex-wrap gap-2">
              <span className="font-medium">DRYON © 2025</span>
              <span className="hidden lg:inline text-white/60">Allpharma - Linha completa de desodorantes</span>
              <Button
                onClick={handleDownload}
                size="sm"
                variant="ghost"
                className="text-secondary hover:text-secondary-light hover:bg-white/10 transition-all text-xs"
                aria-label="Baixar catálogo"
              >
                <Download size={14} className="mr-1 md:mr-2" />
                Baixar
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          <Card className="p-4 md:p-6 bg-white/80 backdrop-blur border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <div className="p-1.5 md:p-2 bg-primary/10 rounded-lg">
                <Eye className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base text-balance">Visualização Online</h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 text-pretty">
              Navegue pelo catálogo diretamente no navegador com controles interativos
            </p>
          </Card>

          <Card className="p-4 md:p-6 bg-white/80 backdrop-blur border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <div className="p-1.5 md:p-2 bg-secondary/10 rounded-lg">
                <Download className="text-secondary" size={20} />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base text-balance">Download Grátis</h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 text-pretty">
              Faça o download do PDF completo para acesso offline a qualquer momento
            </p>
          </Card>

          <Card className="p-4 md:p-6 bg-white/80 backdrop-blur border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <div className="p-1.5 md:p-2 bg-primary-dark/10 rounded-lg">
                <Share2 className="text-primary-dark" size={20} />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base text-balance">Compartilhe</h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 text-pretty">
              Compartilhe o catálogo com sua equipe ou parceiros de negócios
            </p>
          </Card>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-primary to-primary-dark text-white py-6 md:py-8 mt-12 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-gray-200 mb-2 font-semibold text-sm md:text-base">
            © 2025 DRYON - Allpharma. Todos os direitos reservados.
          </p>
          <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
            ATHENA DISTRIBUIDORA LTDA - CNPJ: 47.500.300/0001-01
          </p>
        </div>
      </footer>
    </div>
  )
}
