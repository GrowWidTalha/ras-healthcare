"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const heroData = [
  {
    title: "Empower Your Health with RAS",
    subtitle:
      "Discover premium supplements designed to support your journey to optimal well-being and vitality.",
    buttonText: "Shop Now",
    image: "/hero-carousels/calcar-no-text.jpg",
    color: "from-purple-500 to-purple-700",
    href: "/shop",
  },
  {
    title: "Trusted Quality, Backed by Science",
    subtitle:
      "Our supplements are formulated with the finest ingredients to ensure you get only the best for your body.",
    buttonText: "Learn More",
    image: "/hero-carousels/follicare-no-text.jpg",
    color: "from-blue-500 to-blue-700",
    href: "/about-us",
  },
//   {
//     title: "Trusted Quality, Backed by Science",
//     subtitle:
//       "Our supplements are formulated with the finest ingredients to ensure you get only the best for your body.",
//     buttonText: "Learn More",
//     image: "/hero-carousels/follicare-text.jpg",
//     color: "from-blue-500 to-blue-700",
//     href: "/about-us",
//   },
//   {
//     title: "",
//     subtitle:
//       "",
//     buttonText: "",
//     image: "/hero-carousels/follicare-text.jpg",
//     color: "from-blue-500 to-blue-700",
//     href: "/about-us",
//   },
];

export default function FullScreenHero() {
    const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    bgRefs.current = bgRefs.current.slice(0, heroData.length);
    contentRefs.current = contentRefs.current.slice(0, heroData.length);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to(bgRefs.current, { opacity: 0, duration: 1 });
    gsap.to(bgRefs.current[currentSlide], { opacity: 1, duration: 1 });

    gsap.to(contentRefs.current, { opacity: 0, y: "50px", duration: 0.5 });
    gsap.to(contentRefs.current[currentSlide], {
      opacity: 1,
      y: "0",
      duration: 0.5,
      delay: 0.5,
    });

    return () => {
      gsap.killTweensOf(bgRefs.current);
      gsap.killTweensOf(contentRefs.current);
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      {heroData.map((hero, index) => (
        <div
          key={index}
          //   @ts-ignore
          ref={(el) => (bgRefs.current[index] = el)}
          className={`absolute inset-0 bg-gradient-to-br ${hero.color} opacity-0 transition-opacity duration-1000 ease-in-out`}
        >
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            priority
            className="object-cover object-right"
            quality={100}
          />
          <div className="absolute " />
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
              <Button
              onClick={() => router.push(hero.href)}
                size="lg"

                className="text-lg rounded-full px-8 py-6"
              >
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
            variant={index === currentSlide ? "default" : "outline"}
            size="icon"
            className="w-3 h-3 rounded-full p-0  bg-opacity-50 hover:bg-opacity-100"
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
