import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const BlogCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image src="https://picsum.photos/300/200" alt={`Blog post`} width={400} height={200} className="w-full" />
    <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">The Importance of Vitamin D in Your Diet</h3>
        <p className="text-gray-600 mb-4">Learn about the crucial role Vitamin D plays in maintaining your overall health and well-being.</p>
        <Button variant="outline" className="flex items-center">
        Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
    </div>
    </div>
  )
}

export default BlogCard
