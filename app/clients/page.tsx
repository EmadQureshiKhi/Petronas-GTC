import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, TrendingUp, Users, Globe } from "lucide-react"

export default function ClientsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechFlow Inc.",
      industry: "Technology",
      content:
        "SaaSify transformed our operations completely. We've seen a 300% increase in productivity and our team collaboration has never been better.",
      rating: 5,
      results: "300% productivity increase",
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Logistics Co.",
      industry: "Logistics",
      content:
        "The automation features saved us countless hours. What used to take days now happens in minutes. Absolutely game-changing for our business.",
      rating: 5,
      results: "80% time savings",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Creative Studios",
      industry: "Marketing",
      content:
        "The analytics and reporting tools gave us insights we never had before. Our campaigns are now data-driven and much more effective.",
      rating: 5,
      results: "150% ROI improvement",
    },
    {
      name: "David Thompson",
      role: "CTO",
      company: "FinanceFirst",
      industry: "Finance",
      content:
        "Security and compliance features are top-notch. We can focus on growing our business knowing our data is completely protected.",
      rating: 5,
      results: "100% compliance achieved",
    },
    {
      name: "Lisa Wang",
      role: "Founder",
      company: "EcoSolutions",
      industry: "Sustainability",
      content:
        "SaaSify scaled with us from startup to enterprise. The platform grows with your needs - it's been an incredible journey.",
      rating: 5,
      results: "500% business growth",
    },
    {
      name: "James Miller",
      role: "VP of Sales",
      company: "SalesForce Pro",
      industry: "Sales",
      content:
        "Our sales team's performance improved dramatically. The CRM integration and automation features are simply outstanding.",
      rating: 5,
      results: "200% sales increase",
    },
  ]

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" },
  ]

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "E-commerce",
    "Manufacturing",
    "Education",
    "Real Estate",
    "Marketing",
    "Logistics",
    "Consulting",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Clients</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful businesses that trust SaaSify to power their growth and transform their
            operations.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="size-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real stories from real businesses that have transformed with SaaSify.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="size-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <Badge variant="outline" className="mt-2">
                      {testimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Success Stories</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to become our next success story? Let's discuss how SaaSify can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Start Your Journey
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
