'use client'

import Image from "next/image"
import { Phone, Mail, Globe, MapPin, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MansoorQureshiCard() {
  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self')
  }

  const handleEmail = () => {
    window.open('mailto:sales@petronasgtc.com', '_self')
  }

  const handleWebsite = () => {
    window.open('https://www.petronasgtc.com/', '_blank')
  }

  const handleContact = () => {
    window.open('/contact', '_blank')
  }

  const handleAddToContacts = () => {
    // Create vCard data
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Mansoor Qureshi
ORG:Petronas Kuwait
TITLE:Managing Director
TEL;TYPE=CELL:+965 99525268
TEL;TYPE=WORK:+965 22618183
EMAIL:sales@petronasgtc.com
URL:https://www.petronasgtc.com/
ADR;TYPE=WORK:;;Luluwa Bin Khaldoon Complex, First Floor, Office No. 15, Ibn-Khaldoun Street;Hawally;;Kuwait
END:VCARD`

    // Create blob and download
    const blob = new Blob([vCardData], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Mansoor_Qureshi_Petronas.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Large Background Logo */}
      <div className="relative h-80 bg-white overflow-hidden">
        {/* Large Background Logo with Dotted Effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Image
            src="/images/design-mode/Untitled-design-11-removebg-preview.png"
            alt="Petronas Background"
            width={500}
            height={250}
            className="w-96 h-auto"
          />
        </div>
        
        {/* Dotted Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.03
        }}></div>

        {/* Profile Image - Fixed Positioning */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
            <Image
              src="https://res.cloudinary.com/duou73d4i/image/upload/v1760456193/pit_mansoor_qureshi_yj5w4v.jpg"
              alt="Mansoor Qureshi"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Torn Paper Effect */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-white">
          <svg
            className="absolute top-0 left-0 w-full h-8"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 L0,8 Q150,0 300,8 T600,8 Q750,0 900,8 T1200,8 L1200,40 Z"
              fill="currentColor"
              className="text-white"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pt-24 pb-8">
        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mansoor Qureshi</h1>
          <p className="text-gray-600 font-medium mb-1">Managing Director</p>
          <p className="text-gray-500 font-medium">Petronas Kuwait</p>
        </div>

        {/* Quick Action Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => handleCall('+965 99525268')}
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
          >
            <Phone className="w-7 h-7 text-white" />
          </button>
          <button
            onClick={handleEmail}
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
          >
            <Mail className="w-7 h-7 text-white" />
          </button>
          <button
            onClick={() => handleCall('+965 22618183')}
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
          >
            <Phone className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Contact Us Card */}
        <Card className="mb-6 border-2 border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-900 font-bold text-lg mb-1">Call Us</p>
                <p className="text-gray-600 text-lg">+965 99525268</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg mb-1">Email</p>
                <p className="text-gray-600 text-lg">sales@petronasgtc.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Website Card */}
        <Card className="mb-8 border-2 border-gray-200 shadow-lg">
          <CardContent className="p-0">
            <button
              onClick={handleWebsite}
              className="w-full flex items-center gap-4 hover:bg-gray-50 rounded-lg p-6 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900 font-bold text-lg">Webpage</p>
                <p className="text-gray-600">Visit our website</p>
              </div>
            </button>
          </CardContent>
        </Card>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm10 2h2v2h-2v-2zm0 2h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-2-4h2v2h-2v-2zm2 0h2v2h-2v-2z"/>
              </svg>
            </button>
            <button className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
          
          <button
            onClick={handleAddToContacts}
            className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 font-bold hover:bg-gray-800 transition-colors shadow-lg"
          >
            Add to Contact
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Plus className="w-5 h-5 text-black" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}