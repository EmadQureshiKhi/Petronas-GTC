'use client'

import Image from "next/image"
import { Phone, Mail, Globe, Plus, Smartphone, PhoneCall, MapPin, Briefcase } from "lucide-react"
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Mansoor Qureshi - Petronas Kuwait',
        text: 'Managing Director at Petronas Kuwait',
        url: window.location.href,
      })
    }
  }

  const handleAddToContacts = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Mansoor Qureshi
ORG:Petronas Kuwait
TITLE:Managing Director
TEL;TYPE=CELL:+965 99525268
TEL;TYPE=WORK:+965 22618183
EMAIL:sales@petronasgtc.com
URL:https://www.petronasgtc.com/
END:VCARD`

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
      <div className="relative bg-white">
        <div className="flex items-center justify-center py-8">
          <Image
            src="/images/design-mode/Untitled-design-11-removebg-preview.png"
            alt="Petronas Background"
            width={500}
            height={250}
            className="w-64 sm:w-96 h-auto object-contain"
          />
        </div>

        <div className="w-full h-px bg-gray-200"></div>

        <div className="flex justify-center -mt-20 sm:-mt-24 pb-4">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
            <Image
              src="https://res.cloudinary.com/duou73d4i/image/upload/v1760456193/pit_mansoor_qureshi_yj5w4v.jpg"
              alt="Mansoor Qureshi"
              width={176}
              height={176}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-8 max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Mansoor Qureshi</h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-gray-500" />
            <p className="text-gray-700 font-semibold text-lg">Managing Director</p>
          </div>
          <p className="text-gray-600 font-medium text-lg">Petronas Kuwait</p>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 mb-8">
          <button
            onClick={() => handleCall('+965 99525268')}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <span className="text-xs font-medium text-gray-600">Mobile</span>
          </button>
          <button
            onClick={handleEmail}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <span className="text-xs font-medium text-gray-600">Email</span>
          </button>
          <button
            onClick={() => handleCall('+965 22618183')}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <PhoneCall className="w-7 h-7 text-white" />
            </div>
            <span className="text-xs font-medium text-gray-600">Office</span>
          </button>
        </div>

        <Card className="mb-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
            </div>

            <div className="space-y-5">
              <button
                onClick={() => handleCall('+965 99525268')}
                className="w-full text-left group"
              >
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">Mobile</p>
                    <p className="text-gray-900 font-semibold text-lg group-hover:text-blue-600 transition-colors">+965 99525268</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleCall('+965 22618183')}
                className="w-full text-left group"
              >
                <div className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">Office</p>
                    <p className="text-gray-900 font-semibold text-lg group-hover:text-green-600 transition-colors">+965 22618183</p>
                  </div>
                </div>
              </button>
              <button
                onClick={handleEmail}
                className="w-full text-left group"
              >
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">Email</p>
                    <p className="text-gray-900 font-semibold text-lg group-hover:text-blue-600 transition-colors break-all">sales@petronasgtc.com</p>
                  </div>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-0">
            <button
              onClick={handleWebsite}
              className="w-full flex items-center gap-4 hover:bg-gray-50 rounded-lg p-6 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900 font-bold text-lg">Visit Website</p>
                <p className="text-gray-600 text-sm">www.petronasgtc.com</p>
              </div>
            </button>
          </CardContent>
        </Card>

        <Card className="mb-8 border-2 border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
                <p className="text-gray-900 font-medium leading-relaxed">
                  Luluwa Bin Khaldoon Complex, First Floor<br />
                  Office No. 15, Ibn-Khaldoun Street<br />
                  Hawally, Kuwait
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleShare}
            className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>

          <button
            onClick={handleAddToContacts}
            className="flex-1 sm:flex-initial bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <span className="text-base sm:text-lg">Save Contact</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Plus className="w-5 h-5 text-gray-900" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}