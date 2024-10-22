import React from "react";
import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((product) => (
            <ProductCard key={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
