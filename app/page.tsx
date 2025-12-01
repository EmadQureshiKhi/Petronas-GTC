"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  ChartBar as BarChart, 
  Layers, 
  Star,
  Sparkles,
  Target,
  Award,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function LandingPage() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const processRef = useRef(null)
  const ctaRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true })
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" })
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      }
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }
    },
  }


  const features = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of industry challenges with tailored solutions for your specific needs.",
      icon: <Target className="size-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Proven Results",
      description: "Track record of successful implementations and measurable business outcomes.",
      icon: <BarChart className="size-6" />,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Client Partnership",
      description: "We work as your trusted partner, ensuring long-term success and growth.",
      icon: <Users className="size-6" />,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous processes and procedures benchmarked against industry standards.",
      icon: <Shield className="size-6" />,
      gradient: "from-emerald-500 to-green-500",
    },
    {
      title: "Comprehensive Support",
      description: "End-to-end support from consultation to implementation and beyond.",
      icon: <Layers className="size-6" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Dedicated Service",
      description: "Committed to serving our clients with utmost care and responsibility.",
      icon: <Award className="size-6" />,
      gradient: "from-indigo-500 to-blue-500",
    },
  ]

  const partners = [
    { src: "/images/partners/datalogic.jpg?v=" + Date.now(), alt: "Datalogic", height: "h-14" },
    { src: "/images/partners/compuprint-srl.jpg?v=" + Date.now(), alt: "Compuprint", height: "h-17" },
    { src: "/images/partners/digital-check.png?v=" + Date.now(), alt: "Digital Check", height: "h-12" },
    { src: "/images/partners/fujitsu.svg?v=" + Date.now(), alt: "Fujitsu", height: "h-14" },
    { src: "/images/partners/globalis.png?v=" + Date.now(), alt: "Globalis", height: "h-17" },
    { src: "/images/partners/nantian.png?v=" + Date.now(), alt: "Nantian", height: "h-17" },
    { src: "/images/partners/printronix.png?v=" + Date.now(), alt: "Printronix", height: "h-17" },
    { src: "/images/partners/tallygenicom.png?v=" + Date.now(), alt: "TallyGenicom", height: "h-17" },
    { src: "/images/partners/troy.png?v=" + Date.now(), alt: "Troy", height: "h-12" },
    { src: "/images/partners/tsc.png?v=" + Date.now(), alt: "TSC", height: "h-16" },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Analysis",
      description: "We begin by understanding your unique challenges and business objectives through comprehensive analysis.",
      icon: <Sparkles className="size-5" />,
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design tailored solutions that align with your industry requirements and business goals.",
      icon: <Target className="size-5" />,
    },
    {
      step: "03",
      title: "Implementation & Support",
      description: "We deliver solutions with ongoing support to ensure sustainable success and continuous improvement.",
      icon: <Zap className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative w-full min-h-[100vh] flex items-center justify-center py-20 md:py-32 lg:py-40 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <motion.div 
              style={{ y: backgroundY }}
              className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)]" />
            
            {/* Floating Orbs */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-primary/30 to-blue-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-primary/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl"
            />
          </div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="text-center max-w-5xl mx-auto"
            >
              {/* Main Heading */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]"
              >
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                  Excellence in
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Business Solutions
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
              >
                At Petronas, we measure our success by your success. We deliver tailored solutions 
                aligned with your business challenges, benchmarked against industry standards.
              </motion.p>

              {/* Feature Pills */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10"
              >
                {[
                  { icon: <Check className="size-4" />, text: "Proven Expertise" },
                  { icon: <Check className="size-4" />, text: "Tailored Solutions" },
                  { icon: <Check className="size-4" />, text: "Dedicated Support" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button 
                  size="lg" 
                  className="rounded-full h-14 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                  asChild
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full h-14 px-8 text-base font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
                  asChild
                >
                  <Link href="/services-clients">
                    Our Services
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* Partners Section */}
        <section className="w-full py-16 md:py-20 border-y bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Trusted Partnerships</p>
              <h2 className="text-2xl md:text-3xl font-bold">Our Global Partners</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto"
            >
              {partners.map((partner, idx) => (
                <motion.div
                  key={`partner-${idx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex h-20 md:h-24 w-32 md:w-40 items-center justify-center transition-all duration-300"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={200}
                    height={80}
                    className={`${partner.height} w-auto object-contain`}
                    quality={100}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} id="features" className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <Badge className="mb-4 px-4 py-1.5 text-sm font-medium" variant="secondary">
                <Star className="size-4 mr-2" />
                Our Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Petronas
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence and client success drives everything we do. 
                We deliver solutions that are not just effective, but transformative.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="group h-full overflow-hidden border-border/50 bg-gradient-to-b from-background to-muted/20 backdrop-blur hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500">
                    <CardContent className="p-6 md:p-8">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg flex-shrink-0`}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* Process Section */}
        <section ref={processRef} className="w-full py-20 md:py-32 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
          </div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              animate={isProcessInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <Badge className="mb-4 px-4 py-1.5 text-sm font-medium" variant="secondary">
                <Globe className="size-4 mr-2" />
                Our Process
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Proven Methodology,{" "}
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Exceptional Results
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                Our structured approach ensures every solution is tailored to your specific needs 
                and delivered with the highest standards of quality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mb-8"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-primary to-blue-600 text-primary-foreground flex items-center justify-center text-2xl md:text-3xl font-bold shadow-xl shadow-primary/25 group-hover:shadow-2xl group-hover:shadow-primary/30 transition-shadow duration-300 flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="w-full py-20 md:py-32 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-600" />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Animated Orbs */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"
          />

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              animate={isCtaInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants}>
                <Badge className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
                  <Sparkles className="size-4 mr-2" />
                  Start Your Journey
                </Badge>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-6"
              >
                Ready to Partner with Excellence?
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
              >
                Join the many satisfied clients who have transformed their business with our 
                proven solutions and dedicated support. Let us help you achieve your goals.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="rounded-full h-14 px-8 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  asChild
                >
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full h-14 px-8 text-base font-semibold bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  asChild
                >
                  <Link href="/products">
                    View Products
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-12 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 items-start">
            {/* Brand */}
            <div className="space-y-4 flex flex-col">
              <Link href="/" className="block -mt-16">
                <Image
                  src="/images/design-mode/Untitled-design-11-removebg-preview.png"
                  alt="Petronas Kuwait"
                  width={200}
                  height={80}
                  className="h-36 w-auto object-top"
                />
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed -mt-2">
                Your trusted partner in business excellence. We deliver solutions that drive your business forward with proven expertise and dedicated support.
              </p>
            </div>

            {/* Pages */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Pages</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/products", label: "Products" },
                  { href: "/services-clients", label: "Services & Clients" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    href="/contact" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="text-muted-foreground">
                  sales@petronasgtc.com
                </li>
                <li className="text-muted-foreground">
                  +965 22618183
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border/40 pt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Petronas Kuwait. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
