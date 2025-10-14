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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="w-full max-w-sm mx-auto bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[2.5rem] overflow-hidden h-[700px] relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
          
          {/* Content */}
          <div className="pt-8 px-6 h-full bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Company Logo */}
            <div className="text-center mb-8">
              <Image
                src="/images/design-mode/Untitled-design-11-removebg-preview.png"
                alt="Petronas Logo"
                width={200}
                height={80}
                className="mx-auto h-16 w-auto"
              />
            </div>

            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="https://res.cloudinary.com/duou73d4i/image/upload/v1760456193/pit_mansoor_qureshi_yj5w4v.jpg"
                  alt="Mansoor Qureshi"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Mansoor Qureshi</h1>
              <p className="text-gray-600 font-medium mb-1">Managing Director</p>
              <p className="text-gray-500 font-medium">Petronas Kuwait</p>
            </div>

            {/* Quick Action Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => handleCall('+965 99525268')}
                className="w-14 h-14 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={handleEmail}
                className="w-14 h-14 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => handleCall('+965 22618183')}
                className="w-14 h-14 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Contact Us Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 font-semibold">Call Us</p>
                  <p className="text-gray-600">+965 99525268</p>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Email</p>
                  <p className="text-gray-600">sales@petronasgtc.com</p>
                </div>
              </div>
            </div>

            {/* Website Card */}
            <div className="bg-white rounded-2xl p-4 shadow-lg mb-6">
              <button
                onClick={handleWebsite}
                className="w-full flex items-center gap-3 hover:bg-gray-50 rounded-xl p-2 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-800 font-semibold">Webpage</p>
                  <p className="text-gray-600 text-sm">Visit our website</p>
                </div>
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm10 2h2v2h-2v-2zm0 2h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-2-4h2v2h-2v-2zm2 0h2v2h-2v-2z"/>
                  </svg>
                </button>
                <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </button>
              </div>
              
              <button
                onClick={handleAddToContacts}
                className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-gray-800 transition-colors"
              >
                Add to Contact
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Plus className="w-4 h-4 text-black" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}