import { SiteHeader } from "@/components/site-header"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function PricingPage() {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://digitaledge.com/pricing",
    name: "Pricing Plans",
    description: "Website Design pricing plans - Starter, Professional, and Enterprise packages for all business needs",
    url: "https://digitaledge.com/pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Website Design Services",
      description: "Professional website design services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "500",
          priceCurrency: "USD",
          description: "5-page website with responsive design and 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Professional Plan",
          price: "1500",
          priceCurrency: "USD",
          description: "10-page website with custom animations and 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Enterprise Plan",
          price: "2000",
          priceCurrency: "USD",
          description: "Unlimited pages with advanced features and unlimited revisions",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://digitaledge.com/pricing",
    name: "Digital Edge | Pricing Plans",
    description:
      "Transparent pricing for professional website design services. Choose from Starter, Professional, or Enterprise packages.",
    url: "https://digitaledge.com/pricing",
    mainEntity: {
      "@type": "Organization",
      name: "Digital Edge",
      url: "https://digitaledge.com",
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        
        {/* Hero Section for Pricing Page */}
        <section className="relative isolate overflow-hidden pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5 flex items-center gap-2">
                <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">digital edge</p>
              </div>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">TRANSPARENT</span>
                <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
                  PRICING
                </span>
                <span className="block">FOR EVERY BUDGET</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-neutral-400">
                Choose the perfect plan for your business needs. No hidden fees, no surprises - just world-class website design that fits your budget.
              </p>
              
              {/* Contact Button */}
              <div className="mt-8">
                <Button asChild className="group relative overflow-hidden rounded-full bg-lime-400 px-8 py-4 text-black font-semibold text-lg transition-all duration-300 hover:bg-lime-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/25">
                  <Link href="/contact" className="relative z-10">
                    <span className="relative">
                      Get Started Today
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-300 via-lime-400 to-lime-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-lime-300 to-lime-400 rounded-full opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

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
