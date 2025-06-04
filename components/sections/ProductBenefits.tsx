"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Percent, Truck, WalletCards } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Product data with images and matching colors
const products = [
    {
        name: "Caldense",
        image: "/caldense.png",
        bgColor: "#2196F3", // Blue
        capsules: "/capsules.png",
    },
    {
        name: "Naturfol",
        image: "/naturfol.png",
        bgColor: "#9C27B0", // Purple
        capsules: "/capsules.png",
    },
    {
        name: "Calcar",
        image: "/calcar.png",
        bgColor: "#E91E63", // Pink/Red
        capsules: "/capsules.png",
    },
]

const benefits = [
    {
        icon: Percent,
        text: "Save on online purchase",
    },
    {
        icon: Truck,
        text: "Free delivery on orders over Rs. 3000",
    },
    {
        icon: WalletCards,
        text: "100% Satisfaction Guaranteed",
    },
]

const ProductBenefits = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const lineRef = useRef<HTMLDivElement>(null)
    const productCircleRef = useRef<HTMLDivElement>(null)
    const productImageRef = useRef<HTMLImageElement>(null)
    const capsulesRef = useRef<HTMLImageElement>(null)
    const circleRefs = useRef<(HTMLDivElement | null)[]>([])
    const [currentProductIndex, setCurrentProductIndex] = useState(0)

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)

        // Create a main timeline
        const mainTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=300%", // Make the scroll duration 3x the height of the section
                pin: true, // Pin the section during the animation
                scrub: 1, // Smooth scrubbing effect
                anticipatePin: 1, // Improves pin performance
                markers: false, // Set to true for debugging
            },
        })

        // Animate the line
        mainTl.to(
            lineRef.current,
            {
                height: "100%",
                duration: 0.3,
                ease: "power2.out",
            },
            0,
        )

        // Animate each benefit circle and text with staggered timing
        circleRefs.current.forEach((circle, index) => {
            if (!circle) return

            // Circle animation
            mainTl.to(
                circle,
                {
                    backgroundColor: "#00E6E6",
                    scale: 1.1,
                    boxShadow: "0 8px 24px rgba(0, 230, 230, 0.3)",
                    duration: 0.2,
                    ease: "power2.inOut",
                },
                0.1 + index * 0.1,
            )

            // Text animation
            const textElement = circle.nextElementSibling
            mainTl.to(
                textElement,
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.2,
                    ease: "power2.out",
                },
                0.15 + index * 0.1,
            )
        })

        // Product transitions - create a sequence for each product change
        products.forEach((product, index) => {
            if (index === 0) return // Skip the first product as it's the initial state

            const startPoint = 0.3 + (index - 1) * 0.3 // Distribute product changes across the timeline

            // Fade out current product
            mainTl.to(
                productImageRef.current,
                {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.1,
                    ease: "power2.in",
                    onComplete: () => setCurrentProductIndex(index),
                },
                startPoint,
            )

            // Change background color
            mainTl.to(
                productCircleRef.current,
                {
                    backgroundColor: product.bgColor,
                    duration: 0.2,
                    ease: "power2.inOut",
                },
                startPoint,
            )

            // Fade in new product
            mainTl.to(
                productImageRef.current,
                {
                    opacity: 1,
                    scale: 0.9,
                    duration: 0.1,
                    ease: "power2.out",
                },
                startPoint + 0.1,
            )
        })

        // Subtle continuous animations
        const floatingTl = gsap.timeline({ repeat: -1, yoyo: true })

        floatingTl.to(productCircleRef.current, {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
        })

        floatingTl.to(
            capsulesRef.current,
            {
                rotation: "+=5",
                y: -5,
                duration: 3,
                ease: "sine.inOut",
            },
            0,
        )

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            gsap.killTweensOf([
                lineRef.current,
                ...circleRefs.current,
                productCircleRef.current,
                productImageRef.current,
                capsulesRef.current,
            ])
            floatingTl.kill()
        }
    }, [])

    return (
        <section ref={sectionRef} className="min-h-screen container mx-auto px-4 py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-20 max-w-7xl mx-auto">
                {/* Benefits List */}
                <div className="relative flex-1">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200">
                        <div
                            ref={lineRef}
                            className="absolute top-0 left-0 w-full bg-[#00E6E6] transition-all duration-700"
                            style={{ height: "0%" }}
                        />
                    </div>

                    {/* Benefits */}
                    <div className="space-y-24">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-8">
                                <div
                                // @ts-ignore
                                    ref={(el) => (circleRefs.current[index] = el)}
                                    className="relative z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500"
                                >
                                    <benefit.icon className="w-6 h-6 text-gray-700" />
                                </div>
                                <p className="text-lg font-medium text-gray-700 opacity-0 transform translate-x-[-20px] transition-all duration-500">
                                    {benefit.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Image */}
                <div className="relative w-full md:w-[600px] h-[600px] flex-1">
                    {/* Glow Effect */}
                    <div
                        className="absolute inset-0 rounded-full blur-3xl opacity-20 animate-pulse"
                        style={{ backgroundColor: products[currentProductIndex].bgColor }}
                    />

                    {/* Circle Background */}
                    <div
                        ref={productCircleRef}
                        className="absolute inset-0 rounded-full overflow-hidden shadow-2xl transition-colors duration-700"
                        style={{ backgroundColor: products[currentProductIndex].bgColor }}
                    >
                        {/* Product Image */}
                        <Image
                            ref={productImageRef}
                            src={products[currentProductIndex].image || "/placeholder.svg"}
                            alt={products[currentProductIndex].name}
                            fill
                            className="object-contain p-8 scale-90 transition-all duration-500"
                            priority
                        />
                        {/* Capsules */}
                        <Image
                            ref={capsulesRef}
                            src={products[currentProductIndex].capsules || "/placeholder.svg"}
                            alt="Capsules"
                            width={200}
                            height={100}
                            className="absolute bottom-12 right-12 transform rotate-12"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 animate-bounce">
                <p className="text-sm mb-2">Scroll to explore</p>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}

export default ProductBenefits
