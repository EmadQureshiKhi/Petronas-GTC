"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { Users, Award, Target, Shield, Zap, Heart } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Users,
      title: "Client Success",
      description: "We measure our success by our clients' success, ensuring every solution drives their business forward and creates lasting value."
    },
    {
      icon: Award,
      title: "Benchmarked Excellence",
      description: "Our processes and procedures are benchmarked against industry standards for optimal results and consistent quality delivery."
    },
    {
      icon: Target,
      title: "Technical Innovation",
      description: "Continuous pursuit of innovation through technology alliances and intellectual property investment for cutting-edge solutions."
    },
    {
      icon: Shield,
      title: "Reliability & Trust",
      description: "Building lasting partnerships through consistent delivery, transparency, and unwavering commitment to our promises."
    },
    {
      icon: Zap,
      title: "Agile Solutions",
      description: "Rapid adaptation to changing business needs with flexible, scalable solutions that grow with your organization."
    },
    {
      icon: Heart,
      title: "Passionate Service",
      description: "Dedicated team members who are passionate about technology and committed to exceeding client expectations."
    }
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
            badge="Our Values"
            title="What Drives Us Forward"
            description="The core principles that shape our culture, guide our decisions, and define our commitment to excellence"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative">
                <div className="size-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <value.icon className="size-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}