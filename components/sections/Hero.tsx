import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Wallet } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex flex-col min">
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Left content section */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Boost Your Health with Premium Nutrients
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            Discover our range of high-quality supplements for a healthier
            you.
            </p>
            <Button
              size="lg"
              className="bg-[#0080FF] hover:bg-[#0066CC] text-white w-full sm:w-auto"
            >
              Shop Now
            </Button>
          </div>

          {/* Right image grid section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[300px] sm:h-[400px] md:h-[500px] w-full">
              {/* Large image */}
              <div className="col-span-1 sm:row-span-2 bg-[#E6F3FF] rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-[200px]">
                <Image
                  src="/1.png"
                  alt="Medical supplies showcase"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Two smaller images */}
              <div className="col-span-1 grid grid-rows-2 gap-4 h-full">
                <div className="bg-[#FFA500] rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-[250px]">
                  <Image
                    src="/2.jpg"
                    alt="Medicine bottles"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="bg-[#FFC0CB] rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-[250px]">
                  <Image
                    src="/3.jpg"
                    alt="Medical equipment"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features section */}
      <section className="bg-muted py-8 sm:py-12 mt-[400px] sm:mt-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-4 rounded-lg hover:bg-background transition-colors">
              <Shield size={36} className="text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg">Reliable</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  All Products are 100% genuine
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-4 rounded-lg hover:bg-background transition-colors">
              <Lock size={36} className="text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg">Secure</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  128-bit SSL encryption to protect your data
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-4 rounded-lg hover:bg-background transition-colors">
              <Wallet size={36} className="text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  Affordable
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Maximum discount and offers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
