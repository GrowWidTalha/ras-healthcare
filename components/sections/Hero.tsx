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

            {/* Content container */}
            {/* <div className="container mx-auto relative h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
                    {/* Left side - Text content */}
                    <div className="text-white space-y-3 md:space-y-4 px-4 sm:px-6 lg:pl-8">
                        <div>
                            <h2 className="text-lg sm:text-xl font-light tracking-wider uppercase">NATURAL HEALTH:</h2>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-wide mt-2">
                                WAY TO<br />WELLNESS
                            </h1>
                            <div className="w-12 md:w-16 h-1 bg-white mt-4 md:mt-6 mb-3 md:mb-4"></div>
                        </div>

                        <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                            <Link href="/shop">
                                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 md:px-10 py-2 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors">
                                    SHOP NOW
                                </button>
                            </Link>
                            <Link href="/products">
                                <button className="bg-white hover:bg-gray-100 text-gray-800 px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors">
                                    EXPLORE PRODUCTS
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Product images */}
                    <div className="mt-8 lg:mt-0 relative px-4 sm:px-0">
                        {/* Product images section removed for cleaner full-screen hero */}
                    </div>
                </div>
            </div> */}
        </div>
    )
}
