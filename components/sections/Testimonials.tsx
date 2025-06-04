"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { gsap } from "gsap"

const testimonials = [
    {
        id: 1,
        name: "Ahmed Raza",
        role: "Customer",
        rating: 5,
        text: "Main roz kaafi thaka hua mehsoos karta tha, lekin Ras Healthcare ke multivitamins lena shuru kiya toh energy levels mein bohot farq aya. Har roz kaam par fresh mehsoos karta hoon. Yeh local brand hone ke bawajood quality mein kisi se kam nahi!",
    },
    {
        id: 2,
        name: "Mrs. Sara Khan",
        role: "Customer",
        rating: 5,
        text: "Mujhe hair fall ka masla bohot arsay se tha. Ras Healthcare ka biotin supplement try kiya aur 2 mahine mein farq nazar aana shuru hogaya. Mujhe sab se achi baat yeh lagi ke natural ingredients use hotay hain.",
    },
    {
        id: 3,
        name: "Bilal Javed",
        role: "Customer",
        rating: 5,
        text: "Gym ke baad recovery mein problem hoti thi, lekin Ras ka whey protein genuinely effective hai. Taste bhi achha hai aur price bhi reasonable hai. Pehli dafa kisi Pakistani brand par itna trust aya hai.",
    },
    {
        id: 4,
        name: "Dr. Mehwish Arif",
        role: "Customer",
        rating: 4,
        text: "As a doctor, mein supplements bohot soch samajh kar recommend karti hoon. Ras Healthcare ke products not only safe hain, balke patients ke feedback bhi kaafi positive aya hai. Packaging aur delivery service bhi impressive thi.",
    },
];

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
