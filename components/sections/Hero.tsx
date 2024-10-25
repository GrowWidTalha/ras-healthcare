'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Button } from "@/components/ui/button"

const heroData = [
  {
    title: "Your path to healthier living",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Shop Now",
    image: "/hero1.jpg",
    color: "from-purple-500 to-purple-700"
  },
  {
    title: "Quality you can trust",
    subtitle: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "Learn More",
    image: "/hero2.jpg",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Expert guidance at your fingertips",
    subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    buttonText: "Get Started",
    image: "/hero3.jpg",
    color: "from-green-500 to-green-700"
  }
]

export default function FullScreenHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const bgRefs = useRef<(HTMLDivElement | null)[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    bgRefs.current = bgRefs.current.slice(0, heroData.length)
    contentRefs.current = contentRefs.current.slice(0, heroData.length)

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    gsap.to(bgRefs.current, { opacity: 0, duration: 1 })
    gsap.to(bgRefs.current[currentSlide], { opacity: 1, duration: 1 })

    gsap.to(contentRefs.current, { opacity: 0, y: '50px', duration: 0.5 })
    gsap.to(contentRefs.current[currentSlide], { opacity: 1, y: '0', duration: 0.5, delay: 0.5 })

    return () => {
      gsap.killTweensOf(bgRefs.current)
      gsap.killTweensOf(contentRefs.current)
    }
  }, [currentSlide])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {heroData.map((hero, index) => (
        <div
          key={index}
        //   @ts-ignore
          ref={(el) => (bgRefs.current[index] = el)}
          className={`absolute inset-0 bg-gradient-to-br ${hero.color} opacity-0 transition-opacity duration-1000 ease-in-out`}
          style={{
            backgroundImage: `url(${hero.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Overlay for better text visibility */}
          <div
        //   @ts-ignore
            ref={(el) => (contentRefs.current[index] = el)}
            className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 lg:p-24 opacity-0"
          >
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                {hero.title}
              </h1>
              <p className="text-lg text-white md:text-xl mb-8">
                {hero.subtitle}
              </p>
              <Button size="lg" className="text-lg rounded-full px-8 py-3">
                {hero.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Circular thumbs on the left */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {heroData.map((_, index) => (
          <Button
            key={index}
            variant={index === currentSlide ? 'default' : 'outline'}
            size="icon"
            className="w-3 h-3 rounded-full p-0  bg-opacity-50 hover:bg-opacity-100"
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

    </div>
  )
}
