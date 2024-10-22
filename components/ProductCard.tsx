import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const ProductCard = () => {
  return (
    <div  className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image src="https://picsum.photos/300/200" alt={`Product`} width={300} height={200} className="w-full" />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">Premium Vitamin Complex</h3>
      <p className="text-gray-600 mb-4">Boost your immune system and overall health.</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">$29.99</span>
        <Button>Add to Cart</Button>
      </div>
    </div>
  </div>
  )
}

export default ProductCard
