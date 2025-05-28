import React from "react";
import ProductSlider from "../ProductSlider";
import { getAllProducts } from "@/app/admin/_actions/product";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedProducts = async () => {
    const products = await getAllProducts();
    return (
        <section className="bg-blue-50 py-16 relative">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        FEATURED <span className="text-teal-500">PRODUCTS</span>
                    </h2>
                </div>

                {/* Products */}
                <ProductSlider products={products.documents} />
            </div>
        </section>
    );
};

export default FeaturedProducts;
