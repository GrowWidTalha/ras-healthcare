import React from 'react'
import Image from 'next/image'

const stores = [
    { name: 'Imtiaz Super Market', logo: '/imtiaz-logo.png' },
    { name: 'Naheed Super Store', logo: '/naheed-logo.png' },
    { name: 'Springs Super Market', logo: '/springs-logo.jpg' },
    { name: 'Bin Hashim Super Store', logo: '/binhashim-logo.jpg' },
    { name: 'Time Medicos', logo: '/time-logo.png' },
]

const AvailableInStores = () => {
    return (
        <section className="py-16 container mx-auto px-4">
            {/* Heading */}
            <h2 className="text-center text-4xl font-bold mb-12">
                AVAILABLE IN{' '}
                <span className="text-[#00E6E6]">STORES</span>
            </h2>

            {/* Store Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8">
                {stores.map((store) => (
                    <div
                        key={store.name}
                        className="bg-white rounded-lg shadow-lg p-6 w-[200px] h-[100px] flex items-center justify-center hover:shadow-xl transition-shadow"
                    >
                        <Image
                            src={store.logo}
                            alt={`${store.name} logo`}
                            width={150}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AvailableInStores
