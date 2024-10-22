import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Boost Your Health with Premium Nutrients
          </h1>
          <p className="text-xl mb-6">
            Discover our range of high-quality supplements for a healthier you.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Shop Now
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero-img.jpg"
            alt="Nutrient Products"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
