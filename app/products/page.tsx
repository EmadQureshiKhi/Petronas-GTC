import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, Shield, Zap, Database, Globe } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      icon: BarChart3,
      title: "Analytics Pro",
      description: "Advanced analytics and reporting tools to track your business performance in real-time.",
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "Export capabilities"],
      badge: "Popular",
    },
    {
      icon: Users,
      title: "Team Manager",
      description: "Comprehensive team management solution for remote and hybrid workforces.",
      features: ["Team collaboration", "Task management", "Time tracking", "Performance metrics"],
      badge: "New",
    },
    {
      icon: Shield,
      title: "Security Suite",
      description: "Enterprise-grade security tools to protect your business data and operations.",
      features: ["Data encryption", "Access control", "Audit logs", "Compliance tools"],
      badge: "Enterprise",
    },
    {
      icon: Zap,
      title: "Automation Hub",
      description: "Powerful automation tools to streamline your workflows and boost productivity.",
      features: ["Workflow automation", "API integrations", "Custom triggers", "Smart notifications"],
      badge: "Featured",
    },
    {
      icon: Database,
      title: "Data Platform",
      description: "Centralized data management platform for all your business intelligence needs.",
      features: ["Data warehousing", "ETL processes", "Data quality", "Integration tools"],
      badge: "Pro",
    },
    {
      icon: Globe,
      title: "Global Connect",
      description: "International business tools for companies operating across multiple markets.",
      features: ["Multi-currency", "Localization", "Global compliance", "Regional analytics"],
      badge: "International",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of SaaS products designed to transform your business operations and drive
            unprecedented growth.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <product.icon className="size-12 text-primary" />
                  <Badge variant="secondary">{product.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center">
                      <div className="size-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team can create tailored products that perfectly fit your unique business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              Contact Sales
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
