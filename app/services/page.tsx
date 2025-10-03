import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Headphones, Code, Rocket, Settings } from "lucide-react"

export default function ServicesPage() {
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

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your current processes and identify opportunities for improvement.",
    },
    {
      step: "02",
      title: "Planning",
      description: "Our team creates a detailed roadmap tailored to your specific requirements.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the plan with precision, keeping you informed every step of the way.",
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing support and optimization to ensure continued success and growth.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive services to help you maximize the value of your technology investment and achieve your
            business objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-6">
                <service.icon className="size-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="size-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="size-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="size-6 text-muted-foreground mx-auto mt-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our services can help transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              View Case Studies
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
