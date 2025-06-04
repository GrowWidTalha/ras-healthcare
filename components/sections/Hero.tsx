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
                    src="/hero-img-2.png"
                    alt="Family looking at health products"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
                {/* Dark overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black/30" /> */}
            </div>

            {/* Bottom centered heading with marquee */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="container mx-auto px-4 overflow-hidden">
                    <div className="marquee-container whitespace-nowrap">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center tracking-wide inline-block animate-marquee">
                            WAY TO WELLNESS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center tracking-wide inline-block animate-marquee">
                            WAY TO WELLNESS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h1>
                    </div>
                    <div className="w-16 h-1 bg-transparent mx-auto mt-4 md:mt-6"></div>
                </div>
            </div>

            <style jsx>{`
                .marquee-container {
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    width: 100%;
                }
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                    display: inline-block;
                }
            `}</style>
        </div>
    )
}
