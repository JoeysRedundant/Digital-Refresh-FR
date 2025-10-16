import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://digitaledge.com/#pricing",
    name: "Pricing Plans",
    description: "Website Design pricing plans - Starter, Professional, and Enterprise packages for all business needs",
    url: "https://digitaledge.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Website Design Services",
      description: "Professional website design services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "2999",
          priceCurrency: "USD",
          description: "5-page website with responsive design and 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Professional Plan",
          price: "5999",
          priceCurrency: "USD",
          description: "10-page website with custom animations and 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Enterprise Plan",
          price: "12999",
          priceCurrency: "USD",
          description: "Unlimited pages with advanced features and unlimited revisions",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://digitaledge.com/",
    name: "Digital Edge | Website Design That Converts & Captivates",
    description:
      "From landing pages to full-scale web experiences, Digital Edge delivers website design that's fast, stunning, and built to drive results.",
    url: "https://digitaledge.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Digital Edge",
      url: "https://digitaledge.com",
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://digitaledge.com/#pricing",
        name: "Pricing Section",
        url: "https://digitaledge.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
