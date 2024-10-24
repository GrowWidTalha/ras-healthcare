import { getProductById } from "@/app/admin/_actions/product";
import ProductDetails from "@/components/ProductDetails";
import React from "react";

const ProductDetailsPage = async ({
  params,
}: {
  params: any;
}) => {
    const { productId } = await params;
  const product = await getProductById(productId);
  return (
    <div className="container mx-auto">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;
