import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const RasAI = () => {
    return (
        <section className="relative w-full min-h-[350px] md:h-[400px] overflow-hidden">
            {/* Background Image */}
            <Image
                src="/ras-ai-banner.png"
                alt="RAS.AI Banner"
                fill
                className="object-cover"
                priority
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-start md:left-[60%]">
                <div className="container mx-auto px-4">
                    <div className="max-w-[600px] bg-black/40 md:bg-transparent rounded-lg p-4 md:p-0">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                            <span className="text-[#00E6E6]">RAS.AI </span> –
                            <br className="hidden md:block" />
                            UPCOMING
                            <br className="" />
                            FEATURE
                        </h2>
                        <p className="text-gray-200 mb-6 text-base md:text-lg">
                            Teaser section introducing RAS.AI – an upcoming intelligent
                            platform for personalized health guidance and supplement
                            recommendations
                        </p>
                        <Button
                            variant="default"
                            className="bg-[#00E6E6] hover:bg-[#00B3B3] text-black font-semibold"
                        >
                            JOIN THE WAITLIST
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RasAI
