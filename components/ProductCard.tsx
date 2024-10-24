import Image from "next/image";
import React from "react";
import { Product } from "@/types/appwrite.types";
import AddtoCartButton from "./AddtoCartButton";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${product.$id}`}>
        <Image
          src={product.images[0]}
          alt={`Product`}
          width={300}
          height={200}
          className="w-full"
        />
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.$id}`}>
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">
            Boost your immune system and overall health.
          </p>
        </Link>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            Rs. {product.price}
          </span>
          <AddtoCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
