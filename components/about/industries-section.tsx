"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { Building2, Globe, TrendingUp, Award, Landmark, Shield } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      icon: Building2,
      title: "Banking & Finance",
      description: "Comprehensive financial technology solutions for modern banking operations and financial institutions.",
      features: ["Core Banking Systems", "Payment Processing", "Risk Management", "Compliance Solutions"]
    },
    {
      icon: Landmark,
      title: "Government & Ministries",
      description: "Government solutions that enhance public service delivery and operational efficiency.",
      features: ["Digital Government", "Citizen Services", "Document Management", "Workflow Automation"]
    },
    {
      icon: TrendingUp,
      title: "Investment & Capital Markets",
      description: "Advanced investment management and portfolio optimization solutions for financial growth.",
      features: ["Portfolio Management", "Trading Systems", "Analytics & Reporting", "Compliance Monitoring"]
    },
    {
      icon: Award,
      title: "Corporate Enterprise",
      description: "Enterprise solutions that drive corporate growth and operational excellence across industries.",
      features: ["ERP Systems", "Business Intelligence", "Process Automation", "Digital Transformation"]
    }
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
            badge="Our Expertise"
            title="Industries We Serve"
            description="Delivering specialized solutions across key sectors with deep industry knowledge and proven expertise"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-background/80 backdrop-blur border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <industry.icon className="size-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground/80 mb-3">Key Solutions:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="size-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}