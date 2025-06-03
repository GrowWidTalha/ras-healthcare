"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
    return (
        <div className="relative bg-blue-50 w-full h-auto min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[1000px] overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute  z-10" />
                <Image
                    src="/hero-img-2.png"
                    alt="Family looking at health products"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content container */}
            <div className="container mx-auto relative z-20 h-full flex flex-col justify-center pt-40 md:pt-40 lg:pt-48">
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
                        {/* Mobile product view (1 centered product) */}
                        {/* <div className="block lg:hidden relative h-[300px] sm:h-[350px] w-full">
                            <div className="relative h-full w-full flex justify-center">
                                <Image
                                    src="/caldense.png"
                                    alt="Caldense"
                                    width={200}
                                    height={350}
                                    className="object-contain z-20"
                                />
                            </div>
                        </div> */}

                        {/* Desktop product view (multiple products) */}
                        <div className="hidden lg:block relative h-[450px] w-full">
                            <Image
                                src="/caldense.png"
                                alt="Caldense"
                                width={300}
                                height={450}
                                className="absolute -top-16 left-[40%] transform -translate-x-1/4 z-20"
                            />
                            <Image
                                src="/vitalmax.png"
                                alt="Vitalmax"
                                width={250}
                                height={400}
                                className="absolute top-10 left-4 z-10"
                            />
                            <Image
                                src="/calcar.png"
                                alt="Calcar"
                                width={200}
                                height={400}
                                className="absolute top-10 right-20 z-10"
                            />
                            <Image
                                src="/capsules.png"
                                alt="Capsules"
                                width={400}
                                height={200}
                                className="absolute -bottom-32 right-10 z-30"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
