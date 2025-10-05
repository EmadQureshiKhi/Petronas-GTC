"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { ArrowRight } from "lucide-react"

export function ProcessSection() {
  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current processes and identify opportunities for improvement through comprehensive consultation.",
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our team creates a detailed roadmap and designs tailored solutions for your specific requirements.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the plan with precision, keeping you informed every step of the way with minimal disruption.",
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing support and continuous optimization to ensure sustained success and business growth.",
    },
  ]

  return (
    <Section className="bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            badge="Our Process"
            title="Proven Methodology for Success"
            description="A structured approach that ensures every solution is tailored to your needs and delivered with the highest standards"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative z-10 text-center group"
            >
              <div className="size-20 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              {index < process.length - 1 && (
                <ArrowRight className="size-6 text-muted-foreground mx-auto mt-6 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}