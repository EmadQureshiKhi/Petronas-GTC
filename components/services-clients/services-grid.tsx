"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section"
import { CheckCircle, Headphones, Code, Rocket, Settings } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your business needs and requirements.",
      features: [
        "Custom application development",
        "API development & integration",
        "Database design & optimization",
        "Legacy system modernization",
      ],
    },
    {
      icon: Rocket,
      title: "Implementation & Migration",
      description: "Seamless transition to our platform with minimal disruption to your operations.",
      features: ["Data migration services", "System integration", "User training & onboarding", "Go-live support"],
    },
    {
      icon: Settings,
      title: "Consulting & Strategy",
      description: "Expert guidance to optimize your business processes and technology stack.",
      features: [
        "Business process analysis",
        "Technology roadmap planning",
        "Digital transformation strategy",
        "Performance optimization",
      ],
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems run smoothly.",
      features: [
        "24/7 technical support",
        "Priority issue resolution",
        "Regular health checks",
        "Proactive monitoring",
      ],
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
            badge="Our Services"
            title="Comprehensive Technology Solutions"
            description="Professional services designed to help you maximize the value of your technology investment and achieve your business objectives"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 backdrop-blur group">
                <CardHeader className="p-0 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="size-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="size-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}