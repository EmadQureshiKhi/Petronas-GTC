"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section"
import { Building2, Calendar, MapPin } from "lucide-react"

export function StorySection() {
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
            badge="Our Journey"
            title="Building Excellence Since 2003"
            description="From our humble beginnings to becoming a trusted technology partner across the region"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-background to-muted/20 backdrop-blur">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Building2 className="size-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Our Foundation</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="size-4" />
                      <span className="text-sm font-medium">Established 2003</span>
                      <MapPin className="size-4 ml-2" />
                      <span className="text-sm font-medium">Kuwait</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Since its inception in 2003, Petronas has been in the business of providing innovative Information
                    Technology solutions, products and services in the state of Kuwait.
                  </p>
                  <p>
                    Based on that solid foundation, Petronas has emerged to provide innovative solutions across the Region,
                    establishing ourselves as a trusted partner for businesses seeking technological excellence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Evolution</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our solutions have been carefully selected to add value by improving efficiency and effectiveness across
                all sectors including Banking, Ministries, Investment and Corporates.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { year: "2003", milestone: "Company founded in Kuwait" },
                { year: "2008", milestone: "Expanded to regional markets" },
                { year: "2015", milestone: "Achieved 500+ successful implementations" },
                { year: "2020", milestone: "Digital transformation leadership" },
                { year: "2024", milestone: "Continued innovation and growth" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50"
                >
                  <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.year}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.milestone}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}