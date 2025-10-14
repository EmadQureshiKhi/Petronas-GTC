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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <Card className="overflow-hidden shadow-2xl border-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
          <CardContent className="p-0">
            {/* Header with Logo and Branding */}
            <div className="relative bg-gradient-to-br from-primary to-primary/80 p-6 text-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
              
              {/* Company Logo */}
              <div className="relative mb-4">
                <Image
                  src="/images/design-mode/Untitled-design-11-removebg-preview.png"
                  alt="Petronas Logo"
                  width={120}
                  height={60}
                  className="mx-auto h-12 w-auto"
                />
              </div>

              {/* Profile Image */}
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-white/20 shadow-xl overflow-hidden bg-white">
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
              <h1 className="text-2xl font-bold text-white mb-1">Mansoor Qureshi</h1>
              <p className="text-white/90 font-medium mb-1">Managing Director</p>
              <p className="text-white/80 text-sm">Petronas Kuwait</p>
            </div>

            {/* Contact Information */}
            <div className="p-6 space-y-4">
              {/* Mobile */}
              <button
                onClick={() => handleCall('+965 99525268')}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-green-500 text-white group-hover:scale-110 transition-transform duration-300">
                  <Phone className="size-5" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-muted-foreground">Mobile</p>
                  <p className="font-semibold text-green-700 dark:text-green-400">+965 99525268</p>
                </div>
              </button>

              {/* Office Phone */}
              <button
                onClick={() => handleCall('+965 22618183')}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-blue-500 text-white group-hover:scale-110 transition-transform duration-300">
                  <Phone className="size-5" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-muted-foreground">Office</p>
                  <p className="font-semibold text-blue-700 dark:text-blue-400">+965 22618183</p>
                </div>
              </button>

              {/* Email */}
              <button
                onClick={handleEmail}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-purple-500 text-white group-hover:scale-110 transition-transform duration-300">
                  <Mail className="size-5" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-purple-700 dark:text-purple-400">sales@petronasgtc.com</p>
                </div>
              </button>

              {/* Website */}
              <button
                onClick={handleWebsite}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-orange-500 text-white group-hover:scale-110 transition-transform duration-300">
                  <Globe className="size-5" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-muted-foreground">Website</p>
                  <p className="font-semibold text-orange-700 dark:text-orange-400">petronasgtc.com</p>
                </div>
              </button>

              {/* Contact Us */}
              <button
                onClick={handleContact}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800/20 dark:to-slate-700/20 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-slate-500 text-white group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="size-5" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-muted-foreground">Contact Us</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-400">Get in Touch</p>
                </div>
              </button>
            </div>

            {/* Add to Contacts Button */}
            <div className="p-6 pt-0">
              <Button
                onClick={handleAddToContacts}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Plus className="mr-2 size-5" />
                Add to Contacts
              </Button>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <div className="text-center text-xs text-muted-foreground">
                <p>Petronas Kuwait - Your Trusted Technology Partner</p>
                <p className="mt-1">Hawally, Kuwait</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}