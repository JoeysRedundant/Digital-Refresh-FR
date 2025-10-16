"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AppverseFooter } from "@/components/appverse-footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    plan: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        plan: "",
        message: "",
      })
      setSubmitStatus("idle")
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />

      <section className="container mx-auto px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Get In Touch</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 leading-relaxed">
              Ready to transform your digital presence? We'd love to hear about your project and discuss how we can help bring your vision to life.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">Send us a message</h2>
                <p className="text-neutral-400">Tell us about your project and we'll get back to you within 24 hours.</p>
              </div>
              
              <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-sm font-medium text-neutral-300">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="h-12 liquid-glass border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-lime-400/50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-sm font-medium text-neutral-300">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="h-12 liquid-glass border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-lime-400/50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-sm font-medium text-neutral-300">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="h-12 liquid-glass border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-lime-400/50"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="company" className="text-sm font-medium text-neutral-300">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="h-12 liquid-glass border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-lime-400/50"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="plan" className="text-sm font-medium text-neutral-300">
                        Interested In
                      </Label>
                      <Select value={formData.plan} onValueChange={(value) => handleChange("plan", value)}>
                        <SelectTrigger className="h-12 liquid-glass border-white/10 bg-white/5 text-white focus:border-lime-400/50">
                          <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent className="liquid-glass border-white/10 bg-neutral-900 text-white">
                          <SelectItem value="starter">Starter Plan</SelectItem>
                          <SelectItem value="professional">Professional Plan</SelectItem>
                          <SelectItem value="enterprise">Enterprise Plan</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-medium text-neutral-300">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="min-h-[160px] liquid-glass border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus:border-lime-400/50"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 rounded-lg bg-lime-400 text-base font-medium text-black hover:bg-lime-300 disabled:opacity-50 transition-colors"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : submitStatus === "success" ? (
                          "Message Sent!"
                        ) : (
                          "Send Message"
                        )}
                      </Button>

                      {submitStatus === "success" && (
                        <p className="mt-4 text-center text-sm text-lime-300">
                          Thank you! We'll get back to you within 24 hours.
                        </p>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">Contact Information</h2>
                <p className="text-neutral-400">Get in touch with us through any of these channels.</p>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                    <a href="mailto:hello@digitaledge.com" className="text-neutral-400 hover:text-lime-300 transition-colors">
                      hello@digitaledge.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
                    <a href="tel:+15551234567" className="text-neutral-400 hover:text-lime-300 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Office</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      123 Design Street<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-lg font-medium text-white mb-4">Business Hours</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Monday - Friday</span>
                      <span className="text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Saturday</span>
                      <span className="text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </main>
  )
}
