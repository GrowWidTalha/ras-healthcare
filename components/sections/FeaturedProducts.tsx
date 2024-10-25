import React from "react";
import ProductCard from "../ProductCard";
import { getAllProducts } from "@/app/admin/_actions/product";
import { Product } from "@/types/appwrite.types";

const FeaturedProducts = async () => {
  const products = await getAllProducts();
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid mx-auto grid-cols-1 md:grid-cols-4 gap-4">
          {products.documents.map((product: Product) => (
            <ProductCard key={product.$id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
