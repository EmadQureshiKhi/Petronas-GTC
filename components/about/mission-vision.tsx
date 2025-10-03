"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section"
import { Target, Heart, Lightbulb, Users } from "lucide-react"

export function MissionVisionSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative IT solutions that are carefully aligned with our clients' business challenges, ensuring their success through benchmarked processes and procedures that drive efficiency and effectiveness.",
      gradient: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "We are committed to continually pursue technical innovation, expand our international technology alliances, invest in our intellectual property and our ability to integrate technologies in order to contribute to the advancement of our clients.",
      gradient: "from-purple-500/10 to-purple-600/10",
      iconColor: "text-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Our Innovation",
      description: "Continuously pushing the boundaries of technology to create solutions that not only meet today's challenges but anticipate tomorrow's opportunities for our clients.",
      gradient: "from-amber-500/10 to-amber-600/10",
      iconColor: "text-amber-600"
    },
    {
      icon: Users,
      title: "Our Commitment",
      description: "Building lasting partnerships with our clients by understanding their unique needs and delivering solutions that create measurable value and sustainable growth.",
      gradient: "from-emerald-500/10 to-emerald-600/10",
      iconColor: "text-emerald-600"
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
            badge="Our Foundation"
            title="Mission, Vision & Values"
            description="The principles that guide everything we do and drive our commitment to excellence"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 backdrop-blur">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`size-8 ${value.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}