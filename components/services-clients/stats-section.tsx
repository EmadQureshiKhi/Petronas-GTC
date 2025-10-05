"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { Users, Globe, TrendingUp, Star } from "lucide-react"

export function StatsSection() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Globe, value: "15+", label: "Countries Served" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Star, value: "4.9/5", label: "Client Satisfaction" },
  ]

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
            badge="Our Impact"
            title="Trusted by Businesses Worldwide"
            description="Numbers that reflect our commitment to excellence and client success across the region"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="size-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="size-10 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}