"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section, SectionHeader } from "@/components/ui/section"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechFlow Inc.",
      industry: "Technology",
      content:
        "Petronas transformed our operations completely. We've seen a 300% increase in productivity and our team collaboration has never been better.",
      rating: 5,
      results: "300% productivity increase",
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Logistics Co.",
      industry: "Logistics",
      content:
        "The automation features saved us countless hours. What used to take days now happens in minutes. Absolutely game-changing for our business.",
      rating: 5,
      results: "80% time savings",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Creative Studios",
      industry: "Marketing",
      content:
        "The analytics and reporting tools gave us insights we never had before. Our campaigns are now data-driven and much more effective.",
      rating: 5,
      results: "150% ROI improvement",
    },
    {
      name: "David Thompson",
      role: "CTO",
      company: "FinanceFirst",
      industry: "Finance",
      content:
        "Security and compliance features are top-notch. We can focus on growing our business knowing our data is completely protected.",
      rating: 5,
      results: "100% compliance achieved",
    },
    {
      name: "Lisa Wang",
      role: "Founder",
      company: "EcoSolutions",
      industry: "Sustainability",
      content:
        "Petronas scaled with us from startup to enterprise. The platform grows with your needs - it's been an incredible journey.",
      rating: 5,
      results: "500% business growth",
    },
    {
      name: "James Miller",
      role: "VP of Sales",
      company: "SalesForce Pro",
      industry: "Sales",
      content:
        "Our sales team's performance improved dramatically. The CRM integration and automation features are simply outstanding.",
      rating: 5,
      results: "200% sales increase",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Section>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            badge="Client Success Stories"
            title="What Our Clients Say"
            description="Real testimonials from real businesses that have transformed their operations with our solutions"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 backdrop-blur group">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="size-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <Badge variant="outline" className="mt-3">
                      {testimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}