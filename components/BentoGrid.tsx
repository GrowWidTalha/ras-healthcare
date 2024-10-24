import Image from 'next/image';
import React from 'react';

const BentoGrid = () => {
  const gridData = [
    {
      title: "Pamper Yourself",
      description: "With Premium Skin & Hair Care Range",
      buttonText: "Shop Now",
      imgSrc: "https://picsum.photos/400/320",
      accent: "bg-rose-500",
      size: "lg:col-span-2 lg:row-span-2"
    },
    {
      title: "Best Care for You and Your Lil One",
      offer: "Up to 50% off",
      buttonText: "Order Now",
      imgSrc: "https://picsum.photos/400/320",
      accent: "bg-blue-500",
      size: "lg:col-span-1"
    },
    {
      title: "30% Savings on Medicine Orders",
      offer: "Up to 30% Off",
      buttonText: "Order Now",
      imgSrc: "https://picsum.photos/400/320",
      accent: "bg-emerald-500",
      size: "lg:col-span-1"
    },
    {
      title: "Black Friday, Only Bigger.",
      offer: "Up to 40% Off",
      description: "Don't miss out on exclusive deals!",
      buttonText: "Shop Now",
      imgSrc: "https://picsum.photos/400/320",
      accent: "bg-purple-500",
      size: "lg:col-span-2"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-auto">
        {gridData.map((item, index) => (
          <div
            key={index}
            className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden ${item.size}
              transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className={`absolute inset-0 ${item.accent} z-10 opacity-10`}></div>
            </div>

            <div className="relative h-full">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit='cover'
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4 z-10">
                {item.offer && (
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${item.accent} text-white`}>
                    {item.offer}
                  </span>
                )}

                <h2 className="text-xl z-10 font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h2>

                {item.description && (
                  <p className="text-gray-600 dark:text-gray-300 z-10">
                    {item.description}
                  </p>
                )}

                <button className={`${item.accent} text-white px-6 py-2 rounded-lg
                  transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50
                  ${item.accent.replace('bg-', 'focus:ring-')}`}>
                  {item.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
