import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Printer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      id: "impact3336",
      name: "Impact3336",
      category: "Impact Printers",
      description: "High-performance impact printer designed for demanding business environments with reliable output quality.",
      image: "/images/products/impact3336.jpg", // You'll add this
      pdfUrl: "/pdfs/impact3336.pdf", // You'll add this
      features: ["High-speed printing", "Durable construction", "Multi-part forms", "Network connectivity"],
      badge: "Popular",
    },
    {
      id: "globalis-impact-4550",
      name: "Globalis Impact 4550",
      category: "Impact Printers",
      description: "Advanced impact printing solution with superior reliability and performance for critical applications.",
      image: "/images/products/globalis-impact-4550.jpg", // You'll add this
      pdfUrl: "/pdfs/globalis-impact-4550.pdf", // You'll add this
      features: ["Heavy-duty performance", "Wide format support", "Low maintenance", "Enterprise ready"],
      badge: "Enterprise",
    },
    {
      id: "globalis-pr90-plus",
      name: "Globalis PR90 Plus",
      category: "Dot Matrix Printers",
      description: "Enhanced dot matrix printer offering exceptional value and performance for everyday printing needs.",
      image: "/images/products/globalis-pr90-plus.jpg", // You'll add this
      pdfUrl: "/pdfs/globalis-pr90-plus.pdf", // You'll add this
      features: ["Cost-effective", "Reliable operation", "Easy maintenance", "Compact design"],
      badge: "Value",
    },
    {
      id: "impact1170",
      name: "Impact1170",
      category: "Impact Printers",
      description: "Compact impact printer perfect for small to medium businesses requiring dependable printing solutions.",
      image: "/images/products/impact1170.jpg", // You'll add this
      pdfUrl: "/pdfs/impact1170.pdf", // You'll add this
      features: ["Compact footprint", "Energy efficient", "Quiet operation", "Easy setup"],
      badge: "Compact",
    },
    {
      id: "impact3650",
      name: "Impact3650",
      category: "Impact Printers",
      description: "Professional-grade impact printer delivering consistent results for high-volume printing environments.",
      image: "/images/products/impact3650.jpg", // You'll add this
      pdfUrl: "/pdfs/impact3650.pdf", // You'll add this
      features: ["High volume capacity", "Professional quality", "Robust design", "Advanced connectivity"],
      badge: "Professional",
    },
    {
      id: "al-khattat-cf60",
      name: "Al-Khattat CF60",
      category: "Specialized Printers",
      description: "Specialized printer designed for Arabic text and multilingual printing with exceptional clarity.",
      image: "/images/products/al-khattat-cf60.jpg", // You'll add this
      pdfUrl: "/pdfs/al-khattat-cf60.pdf", // You'll add this
      features: ["Arabic text support", "Multilingual printing", "High resolution", "Cultural compliance"],
      badge: "Specialized",
    },
    {
      id: "cx30-t240-uv",
      name: "CX30 T240 UV",
      category: "UV Printers",
      description: "Advanced UV printing technology for specialized applications requiring superior print quality.",
      image: "/images/products/cx30-t240-uv.jpg", // You'll add this
      pdfUrl: "/pdfs/cx30-t240-uv-brochure.pdf", // You'll add this
      features: ["UV printing technology", "Superior quality", "Specialized applications", "Advanced features"],
      badge: "Advanced",
    },
    {
      id: "6800-family",
      name: "The 6800 Family",
      category: "Line Matrix Printers",
      description: "Complete family of line matrix printers offering versatile solutions for various business needs.",
      image: "/images/products/6800-family.jpg", // You'll add this
      pdfUrl: "/pdfs/6800-family-line-matrix-printers.pdf", // You'll add this
      features: ["Line matrix technology", "Family of models", "Versatile solutions", "Business focused"],
      badge: "Family",
    },
  ]

  const categories = ["All", "Impact Printers", "Dot Matrix Printers", "UV Printers", "Line Matrix Printers", "Specialized Printers"]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Printer className="size-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Our Products
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="text-primary">Printing Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of professional printing solutions designed to meet the diverse needs of 
            modern businesses across various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant={index === 0 ? "default" : "secondary"} 
              className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/40 bg-gradient-to-b from-background to-muted/10">
              <CardHeader className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-muted/30 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">
                        {product.category}
                      </Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-semibold text-foreground/80">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="size-1 bg-primary rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link href={product.pdfUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full rounded-full text-sm group/btn">
                      <FileText className="mr-2 size-4" />
                      View Specifications
                      <Download className="ml-2 size-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our experts are here to help you find the perfect printing solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/contact">
                  Get Expert Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}