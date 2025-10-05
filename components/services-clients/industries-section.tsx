"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"

export function IndustriesSection() {
  const industries = [
    "Banking & Finance",
    "Government & Ministries", 
    "Healthcare",
    "Investment & Capital Markets",
    "E-commerce",
    "Manufacturing",
    "Education",
    "Real Estate",
    "Marketing & Advertising",
    "Logistics & Supply Chain",
    "Corporate Enterprise",
    "Consulting Services",
    "Insurance",
    "Telecommunications",
    "Energy & Utilities"
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <Section className="bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            badge="Industries We Serve"
            title="Specialized Solutions Across Sectors"
            description="Delivering tailored technology solutions with deep industry knowledge and proven expertise across diverse business sectors"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={item}>
              <Badge 
                variant="secondary" 
                className="px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {industry}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}