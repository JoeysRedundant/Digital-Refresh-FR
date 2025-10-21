import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Award, Users, Zap, Shield, Target } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function WhyUsPage() {
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://digitaledge.com/why-us",
    name: "Digital Edge | Why Choose Us",
    description:
      "Discover why Digital Edge is the premier choice for website design. Expert team, proven results, and unmatched quality.",
    url: "https://digitaledge.com/why-us",
    mainEntity: {
      "@type": "Organization",
      name: "Digital Edge",
      url: "https://digitaledge.com",
    },
  }

  const reasons = [
    {
      icon: Award,
      title: "Award-Winning Design",
      description: "Our designs have won multiple industry awards and recognition for innovation and excellence.",
      features: ["Industry recognition", "Design excellence", "Creative innovation"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team consists of experienced designers, developers, and strategists with years of expertise.",
      features: ["10+ years experience", "Certified professionals", "Continuous learning"]
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "We deliver high-quality websites in record time without compromising on quality or attention to detail.",
      features: ["Quick turnaround", "Quality maintained", "On-time delivery"]
    },
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with a comprehensive satisfaction guarantee and ongoing support.",
      features: ["Money-back guarantee", "Unlimited revisions", "Lifetime support"]
    },
    {
      icon: Target,
      title: "Results-Driven Approach",
      description: "Every website we create is optimized for conversions and designed to drive real business results.",
      features: ["Conversion optimization", "Performance tracking", "ROI focused"]
    }
  ]

  const stats = [
    { number: "500+", label: "Websites Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5★", label: "Average Rating" }
  ]

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden pt-16 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5 flex items-center gap-2">
                <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">digital edge</p>
              </div>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">WHY CHOOSE</span>
                <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
                  DIGITAL EDGE
                </span>
                <span className="block">FOR YOUR SUCCESS</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-neutral-400">
                We're not just another web design agency. We're your strategic partner in digital success, 
                combining cutting-edge design with proven strategies to deliver exceptional results.
              </p>
              
              {/* CTA Button */}
              <div className="mt-8">
                <Button asChild className="group relative overflow-hidden rounded-full bg-lime-400 px-8 py-4 text-black font-semibold text-lg transition-all duration-300 hover:bg-lime-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/25">
                  <Link href="/contact" className="relative z-10">
                    <span className="relative">
                      Start Your Project
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

        {/* Stats Section */}
        <section className="py-16 bg-neutral-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-lime-300 sm:text-4xl">{stat.number}</div>
                  <div className="mt-2 text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Digital Edge Stands Out
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                We combine technical expertise with creative vision to deliver websites that not only look amazing but drive real business results.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, index) => (
                <Card key={index} className="liquid-glass border-neutral-800 hover:liquid-glass-enhanced transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-lime-400/10">
                        <reason.icon className="h-6 w-6 text-lime-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                    </div>
                    <p className="text-neutral-400 mb-4">{reason.description}</p>
                    <ul className="space-y-2">
                      {reason.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime-300 flex-shrink-0" />
                          <span className="text-sm text-neutral-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-neutral-900 to-neutral-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Experience the Difference?
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                Join hundreds of satisfied clients who have transformed their digital presence with Digital Edge.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild className="bg-lime-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-lime-300 transition-all">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button asChild variant="outline" className="border-neutral-600 text-white hover:bg-neutral-800 px-8 py-3 rounded-full">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
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
