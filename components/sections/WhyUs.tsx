import { Shield, FlaskConical, Truck, PackageCheck } from "lucide-react"
import Image from "next/image"

const WhyUs = () => {
    return (
        <section className="bg-blue-50 py-16 relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Heading with decorative line */}
                <div className="text-center mb-16">
                    <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        WHY CHOOSE <span className="text-teal-500">RAS</span>
                    </h2>
                </div>

                {/* Features */}
                <div className="relative">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-6 relative z-10">
                        {/* 100% Natural */}
                        <div className="flex flex-col items-center text-center group transition-all duration-300">
                            <div className="w-24 h-24 bg-white group-hover:bg-teal-500 group transition-all duration-300  rounded-full flex items-center justify-center shadow-md mb-6 border-4 group-hover:border-white">
                                <Shield className="w-10 h-10 text-blue-900 group-hover:text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="group-hover:text-teal-500 text-black font-semibold mb-1">100% NATURAL</h3>
                            <p className="group-hover:text-teal-500 text-black font-medium">FORMULAS</p>
                        </div>

                        {/* Trusted by doctors */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-white group-hover:bg-teal-500 group transition-all duration-300  rounded-full flex items-center justify-center shadow-md mb-6 border-4 group-hover:border-white">
                                <FlaskConical className="w-10 h-10 text-blue-900 group-hover:text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="group-hover:text-teal-500 text-black font-semibold mb-1">TRUSTED BY LOCAL</h3>
                            <p className="group-hover:text-teal-500 text-black font-medium">DOCTORS</p>
                        </div>

                        {/* Fast Delivery */}
                        <div className="flex flex-col items-center text-center group transition-all duration-300">
                            <div className="w-24 h-24 bg-white group-hover:bg-teal-500 group transition-all duration-300  rounded-full flex items-center justify-center shadow-md mb-6 border-4 group-hover:border-white">
                                <Truck className="w-10 h-10 text-blue-900 group-hover:text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="group-hover:text-teal-500 text-black font-semibold mb-1">FAST DELIVERY</h3>
                            <p className="group-hover:text-teal-500 text-black font-medium">IN PAKISTAN</p>
                        </div>

                        {/* Return Policy */}
                        <div className="flex flex-col items-center text-center group transition-all duration-300">
                            <div className="w-24 h-24 bg-white group-hover:bg-teal-500 group transition-all duration-300  rounded-full flex items-center justify-center shadow-md mb-6 border-4 group-hover:border-white">
                                <PackageCheck className="w-10 h-10 text-blue-900 group-hover:text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="group-hover:text-teal-500 text-black font-semibold mb-1">10-DAY RETURN</h3>
                            <p className="group-hover:text-teal-500 text-black font-medium">POLICY</p>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative line */}
                <Image
                    src="/wires.png"
                    alt="Why Us"
                    width={1000}
                    height={1000}
                    className="absolute top-40 left-0 w-full h-auto"
                />
                {/* <div className="w-24 h-1 bg-teal-500 mx-auto mt-16"></div> */}
            </div>
        </section>
    )
}

export default WhyUs
