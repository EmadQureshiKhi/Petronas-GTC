"use client"

import type React from "react"

import Image from "next/image"

const logos = [
  { src: "/images/partners/datalogic.jpg", alt: "Datalogic" },
  { src: "/images/partners/compuprint-srl.jpg", alt: "Compuprint SRL" },
  { src: "/images/partners/digital-check.png", alt: "Digital Check" },
  { src: "/images/partners/fujitsu.svg", alt: "Fujitsu" },
  { src: "/images/partners/globalis.png", alt: "Globalis" },
  { src: "/images/partners/nantian.png", alt: "Nantian" },
  { src: "/images/partners/printronix.png", alt: "Printronix" },
  { src: "/images/partners/tallygenicom.png", alt: "TallyGenicom" },
  { src: "/images/partners/troy.png", alt: "Troy" },
  { src: "/images/partners/tsc.png", alt: "TSC" },
]

function LogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-16 md:h-20 lg:h-24 w-[160px] md:w-[200px] lg:w-[240px] items-center justify-center shrink-0 mx-6">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={220}
        height={96}
        className="h-12 md:h-14 lg:h-16 w-auto object-contain"
        priority
      />
    </div>
  )
}

export function PartnersMarquee() {
  return (
    <section aria-label="Our Partners" className="py-8 md:py-10 lg:py-12">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6">Our Partners</h2>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        {logos.map((logo, idx) => (
          <LogoItem key={`${logo.src}-${idx}`} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  )
}

export default PartnersMarquee
