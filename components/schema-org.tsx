import Script from "next/script"

export function OrgSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DryOn",
    url: "https://dryon.com.br",
    logo: "https://dryon.com.br/images/design-mode/b84cb302-27e8-45e4-8782.png",
    brand: "DryOn",
    description: "Desodorantes DryOn: proteção descomplicada para brasileiros excelentes.",
    sameAs: [],
  }
  return (
    <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
