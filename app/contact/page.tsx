import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "sales@petronasgtc.com",
      description: "Sales inquiries and general questions",
    },
    {
      icon: Mail,
      title: "Support Email",
      details: "support@petronasgtc.com",
      description: "Technical support and assistance",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+965 22618183",
      description: "Main office line",
    },
    {
      icon: Phone,
      title: "Mobile",
      details: "+965 99525268",
      description: "Direct mobile contact",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Luluwa Bin Khaldoon Complex",
      description: "First Floor - Office No. 15, Ibn-Khaldoun Street, Hawally, Kuwait",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "8:00 AM - 5:00 PM Kuwait Time",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team and let's discuss how Petronas can help you
            achieve your goals with our professional printing solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <form className="space-y-6" action="mailto:sales@petronasgtc.com" method="post" encType="text/plain">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us more about your project or questions..." rows={5} required />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send Message
                  <Send className="ml-2 size-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help with all your printing solution needs. Contact us for expert consultation and support.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="size-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="font-medium mb-1 text-primary">{info.details}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps */}
            <Card className="p-6 bg-muted/30">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.8234567890123!2d48.0123456789!3d29.3123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIbn%20Khaldoun%20Street%2C%20Hawally%2C%20Kuwait!5e0!3m2!1sen!2skw!4v1234567890123!5m2!1sen!2skw"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Petronas Office Location"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Petronos Twin Tower Gen. Trad. & Cont. Co - Luluwa Bin Khaldoon Complex<br />
                  First Floor - Office No. 15 - Ibn-Khaldoun Street - Hawally - Kuwait
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
