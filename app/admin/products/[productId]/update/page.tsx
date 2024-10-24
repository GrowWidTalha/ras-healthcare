import { getProductById } from '@/app/admin/_actions/product'
import AddProductForm from '@/app/admin/_components/AddProductForm'
import React from 'react'

const ProductUpdatePage = async({params}: {params: {productId: string}}) => {
    const product = await getProductById(params.productId)
  return (
    <div>
        <AddProductForm type="update" product={product}/>
    </div>
  )
}

export default ProductUpdatePage
