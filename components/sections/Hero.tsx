"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-img-3.png"
                    alt="Family looking at health products"
                    fill
                    className="object-cover object-bottom"
                    priority
                    quality={100}
                />
                {/* Dark overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black/30" /> */}
            </div>

        </div>
    )
}
