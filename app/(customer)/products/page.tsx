import { getAllProducts } from '@/app/admin/_actions/product';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/appwrite.types';
import React from 'react'

const ProductsPage = async () => {
    const products = await getAllProducts();
  return (
    <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl md:text-4xl font-bold'>All Products</h1>
        <div className='grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.documents.map((product: Product) => (
                <ProductCard key={product.$id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default ProductsPage
