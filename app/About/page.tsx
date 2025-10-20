// app/about/page.tsx
import React from "react";
import { SiteHeader } from "@/components/site-header";
import { AppverseFooter } from "@/components/appverse-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digital Edge",
    url: "https://digitaledge.com",
    logo: "https://digitaledge.com/logo.png",
    description:
      "Digital Edge is a professional website design agency creating websites that convert and captivate audiences with modern design and cutting-edge technology.",
    sameAs: [
      "https://www.instagram.com/digitaledge",
      "https://www.linkedin.com/company/digitaledge",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "United States" },
      { "@type": "Place", name: "Canada" },
      { "@type": "Place", name: "United Kingdom" },
    ],
  };

  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />
      
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Digital Edge
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Creating websites that convert and captivate audiences with modern design and cutting-edge technology.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Modern Website Design",
              desc: "Creating stunning, responsive websites that work perfectly on all devices.",
            },
            {
              title: "Conversion Optimization",
              desc: "Designing websites that drive results and turn visitors into customers.",
            },
            {
              title: "Cutting-edge Technology",
              desc: "Using the latest web technologies and frameworks for optimal performance.",
            },
            {
              title: "Brand Storytelling",
              desc: "Helping businesses communicate their vision through compelling web experiences.",
            },
            {
              title: "Collaborative Process",
              desc: "Working directly with clients for seamless project delivery.",
            },
            {
              title: "SEO & Performance",
              desc: "Optimized websites that rank well and load fast for better user experience.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Let Digital Edge create a website that converts and captivates your audience.
        </p>
        <Button asChild className="rounded-full bg-lime-400 px-6 py-3 text-black font-semibold hover:bg-lime-300 transition-all">
          <Link href="/contact">Get Started</Link>
        </Button>
      </section>
      
      <AppverseFooter />
    </main>
  );
}
