import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialMediaLinks = [
    {
      name: "Instagram",
      href: "/home", // redirecting to /home instead of Instagram
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.226-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.696-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.013-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
    {
      name: "Facebook",
      href: "/home", // redirecting to /home instead of Facebook
      icon: (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      ),
    },
    {
      name: "TikTok",
      href: "/home", // redirecting to /home instead of TikTok
      icon: (
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      ),
    },
    {
      name: "YouTube",
      href: "/home", // redirecting to /home instead of YouTube
      icon: (
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      ),
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-[var(--color-primary)] via-[#23376D] to-[#192850] text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-3xl text-[var(--color-secondary)] mb-3 tracking-tight text-balance">
                DryOn
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed text-pretty">
                Você no modo ON. Proteção descomplicada para brasileiros excelentes.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-white/20">
              <div className="relative h-8 w-[120px] flex items-center">
                <Image
                  src="/images/design-mode/Logotipo%20Allpharma%20PNG.png"
                  alt="AllPharma"
                  width={120}
                  height={35}
                  className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity rounded-sm bg-primary-foreground"
                />
              </div>
              <span className="text-xs text-blue-200">Empresa mantedora</span>
            </div>
          </div>

          <nav aria-label="Links de navegação">
            <h4 className="font-heading text-xl text-white mb-5 tracking-wider text-balance">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/catalogo", label: "Catálogo de Produtos" },
                { href: "/home", label: "Home" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-[var(--color-secondary)] transition-all duration-200 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading text-xl text-white mb-5 tracking-wider text-balance">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-[var(--color-primary)]"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-blue-200 mb-1">E-mail</p>
                  <a
                    href="mailto:contato@dryon.com.br"
                    className="text-sm text-blue-100 hover:text-[var(--color-secondary)] transition-colors break-words"
                  >
                    sac@axlfarma.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[var(--color-primary)]"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-blue-200 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/0800-0004580"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-100 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    0800-0004580
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
            {socialMediaLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[var(--color-secondary)] transition-colors">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-blue-100">
            <p className="text-center sm:text-left">© {currentYear} DryOn. Todos os direitos reservados.</p>
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center">
              <Link href="/privacidade" className="hover:text-[var(--color-secondary)] transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="hover:text-[var(--color-secondary)] transition-colors">
                Termos de Uso
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />
    </footer>
  )
}
