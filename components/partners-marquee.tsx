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
    <li className="partners-item flex h-16 md:h-20 lg:h-24 w-[160px] md:w-[200px] lg:w-[240px] items-center justify-center shrink-0">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={220}
        height={96}
        className="h-12 md:h-14 lg:h-16 w-auto object-contain"
        priority
      />
    </li>
  )
}

export function PartnersMarquee() {
  // duplicated list for seamless loop
  const dup = [...logos]

  return (
    <section aria-label="Our Partners" className="py-8 md:py-10 lg:py-12">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6">Our Partners</h2>

      <div
        className="partners-marquee relative overflow-hidden"
        style={
          {
            // adjust duration as needed
            // @ts-ignore
            "--partners-duration": "28s",
            "--partners-gap": "2.5rem",
          } as React.CSSProperties
        }
      >
        <div className="partners-lane flex">
          <ul className="partners-track flex items-center">
            {logos.map((l) => (
              <LogoItem key={l.src} src={l.src} alt={l.alt} />
            ))}
          </ul>

          <ul className="partners-track partners-track--dup flex items-center" aria-hidden="true">
            {dup.map((l) => (
              <LogoItem key={`dup-${l.src}`} src={l.src} alt={l.alt} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PartnersMarquee
