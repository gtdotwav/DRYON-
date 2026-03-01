export function OrgSchema() {
  const newDescription =
    "Conheça a linha completa de desodorantes para manter suas axilas secas e protegidas o dia todo. DryON é proteção descomplicada para o brasileiro que faz render."

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DryOn",
    alternateName: "DryOn Proteção",
    url: "https://dryon.com.br",
    logo: "https://dryon.com.br/favicon.png",
    description: newDescription,
    foundingDate: "2024",
    parentOrganization: {
      "@type": "Organization",
      name: "AllPharma",
      url: "https://allpharma.com.br",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "0800-0004580",
        contactType: "customer service",
        availableLanguage: ["Portuguese"],
        areaServed: "BR",
      },
      {
        "@type": "ContactPoint",
        email: "sac@axlfarma.com",
        contactType: "customer support",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DryOn",
    url: "https://dryon.com.br",
    description: newDescription,
    publisher: {
      "@type": "Organization",
      name: "DryOn",
      logo: "https://dryon.com.br/favicon.png",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://dryon.com.br/catalogo?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DryOn",
    image: "https://dryon.com.br/favicon.png",
    url: "https://dryon.com.br",
    telephone: "0800-0004580",
    email: "sac@axlfarma.com",
    description: newDescription,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  )
}
