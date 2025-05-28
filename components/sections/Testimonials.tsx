"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { gsap } from "gsap"

const testimonials = [
    {
        id: 1,
        name: "JOHN SMITH",
        role: "CLIENT",
        image: "/testimonials/john-smith.jpg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 2,
        name: "JESSA RHOADES",
        role: "CLIENT",
        image: "/testimonials/jessa-rhoades.jpg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 3,
        name: "MALIKA SHAG",
        role: "CLIENT",
        image: "/testimonials/malika-shag.jpg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 4,
        name: "JASON MARK",
        role: "CLIENT",
        image: "/testimonials/jason-mark.jpg",
        rating: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
]

// Duplicate testimonials to create a seamless loop effect
const extendedTestimonials = [...testimonials, ...testimonials]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => {
    return (
        <div className="bg-white rounded-xl p-8 shadow-lg w-[400px] flex-shrink-0 mx-4 transform transition-transform hover:scale-105">
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={20}
                        className={`${i < testimonial.rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"}`}
                    />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 mb-6 line-clamp-6">{testimonial.text}</p>

            {/* User Info */}
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
    const sliderRef = useRef<HTMLDivElement>(null)
    const sliderWrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const slider = sliderRef.current
        if (!slider) return

        // Create a seamless infinite scroll animation
        const cardWidth = 424 // 400px width + 24px gap
        const totalWidth = testimonials.length * cardWidth

        // Clone the slider content for seamless looping
        const animation = gsap.to(slider, {
            x: `-${totalWidth}px`,
            duration: testimonials.length * 5, // Adjust speed here (higher number = slower)
            ease: "linear",
            repeat: -1, // Infinite repeat
            onRepeat: () => {
                // Reset position when it completes one cycle
                gsap.set(slider, { x: 0 })
            },
        })

        // Pause animation on hover
        const sliderWrapper = sliderWrapperRef.current
        if (sliderWrapper) {
            sliderWrapper.addEventListener("mouseenter", () => animation.pause())
            sliderWrapper.addEventListener("mouseleave", () => animation.play())
        }

        return () => {
            animation.kill()
            if (sliderWrapper) {
                sliderWrapper.removeEventListener("mouseenter", () => animation.pause())
                sliderWrapper.removeEventListener("mouseleave", () => animation.play())
            }
        }
    }, [])

    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-transparent">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    WHAT PEOPLE <span className="text-[#00E6E6]">SAYS</span>
                </h2>
                <div className="w-20 h-1 bg-[#00E6E6] mx-auto mt-4" />
            </div>

            {/* Testimonials Slider */}
            <div ref={sliderWrapperRef} className="relative overflow-hidden">
                <div ref={sliderRef} className="flex gap-6 py-4">
                    {extendedTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
