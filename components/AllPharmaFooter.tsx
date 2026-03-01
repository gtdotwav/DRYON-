import Link from "next/link"

export default function AllPharmaFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#552819] via-[#6F3D25] to-[#552819] text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <img
              src="/images/design-mode/Logotipo%20Allpharma%20PNG(2).png"
              alt="Allpharma"
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-300 leading-relaxed text-pretty">
              Uma nova indústria, mas com raízes profundas.
            </p>
            <div className="flex gap-4">
              <a
                href="/home"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#6F9D39] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="/home"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#6F9D39] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="/home"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#6F9D39] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#6F9D39] text-balance">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/home"
                  className="text-sm text-gray-300 hover:text-[#6F9D39] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F9D39]"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-gray-300 hover:text-[#6F9D39] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F9D39]"></span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="text-sm text-gray-300 hover:text-[#6F9D39] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F9D39]"></span>
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-gray-300 hover:text-[#6F9D39] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F9D39]"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#6F9D39] text-balance">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#6F9D39] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:sac@axlfarma.com"
                    className="text-sm text-gray-300 hover:text-[#6F9D39] transition-colors duration-300"
                  >
                    sac@axlfarma.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#6F9D39] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-xs text-gray-400 mb-1">{"Contato:"}</p>
                  <a
                    href="mailto:RH-DP@axlfarma.com"
                    className="text-sm text-gray-300 hover:text-[#6F9D39] transition-colors duration-300"
                  >
                    0800-0004580
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#6F9D39] text-balance">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4 text-pretty">
              Receba novidades e atualizações direto no seu email.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6F9D39] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full bg-[#6F9D39] hover:bg-[#7FAD4A] text-white font-semibold py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              {currentYear} Allpharma. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/privacidade"
                className="text-sm text-gray-400 hover:text-[#6F9D39] transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-sm text-gray-400 hover:text-[#6F9D39] transition-colors duration-300"
              >
                Termos de Uso
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-400 hover:text-[#6F9D39] transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Detalhe decorativo */}
      <div className="h-2 bg-gradient-to-r from-[#6F9D39] via-[#7FAD4A] to-[#6F9D39]"></div>
    </footer>
  )
}
