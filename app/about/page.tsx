import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Heart, Building2, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Petronas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Petronas, we measure our success by our client success. We ensure that our solutions are aligned to help
            you with the business challenges faced in your industry and we deliver those solutions according to
            processes and procedures that have been benchmarked.
          </p>
        </div>

        {/* Company History */}
        <div className="mb-16">
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <Building2 className="size-12 text-primary mr-4" />
                <div>
                  <h2 className="text-3xl font-bold">Our Story</h2>
                  <p className="text-muted-foreground">Since 2003</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Since its inception in 2003, Petronas has been in the business of providing innovative Information
                Technology solutions, products and services in the state of Kuwait. Based on that solid foundation,
                Petronas has emerged to provide innovative solutions in the Region.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our solutions have been carefully selected to add value by improving efficiency and effectiveness across
                all sectors including Banking, Ministries, Investment and Corporates.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <CardContent className="p-0">
              <Target className="size-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver innovative IT solutions that are carefully aligned with our clients' business challenges,
                ensuring their success through benchmarked processes and procedures that drive efficiency and
                effectiveness.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <Heart className="size-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to continually pursue technical innovation, expand our international technology
                alliances, invest in our intellectual property and our ability to integrate technologies in order to
                contribute to the advancement of our clients.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Industry Focus */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Banking</h3>
              <p className="text-muted-foreground">
                Comprehensive financial technology solutions for modern banking operations.
              </p>
            </div>
            <div className="text-center">
              <Globe className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ministries</h3>
              <p className="text-muted-foreground">
                Government solutions that enhance public service delivery and efficiency.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Investment</h3>
              <p className="text-muted-foreground">
                Advanced investment management and portfolio optimization solutions.
              </p>
            </div>
            <div className="text-center">
              <Award className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Corporates</h3>
              <p className="text-muted-foreground">
                Enterprise solutions that drive corporate growth and operational excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client Success</h3>
              <p className="text-muted-foreground">
                We measure our success by our clients' success, ensuring every solution drives their business forward.
              </p>
            </div>
            <div className="text-center">
              <Award className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Benchmarked Excellence</h3>
              <p className="text-muted-foreground">
                Our processes and procedures are benchmarked against industry standards for optimal results.
              </p>
            </div>
            <div className="text-center">
              <Target className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Innovation</h3>
              <p className="text-muted-foreground">
                Continuous pursuit of innovation through technology alliances and intellectual property investment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Petronas</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the difference of working with a trusted technology partner committed to your success.
          </p>
          <Button size="lg" className="rounded-full">
            Start Your Journey
          </Button>
        </div>
      </main>
    </div>
  )
}
