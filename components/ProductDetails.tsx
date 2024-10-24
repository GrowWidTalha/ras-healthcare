"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Truck, Clock } from "lucide-react";
import { Product } from "@/types/appwrite.types";
import { useCart } from "./providers/CartContext";

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart, cart } = useCart();
  const productInCart = cart.find((item) => item.$id === product.$id);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, i) => (
              <div
                key={i}
                className="aspect-square relative overflow-hidden rounded-lg"
              >
                <Image
                  src={img}
                  alt={`CeraVe product thumbnail ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-sm text-gray-500 uppercase">Ras Healthcare</h2>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">(12)</span>
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold">Rs. {product.price}</span>
            {/* <span className="text-lg text-gray-500 line-through">$18.55</span> */}
          </div>
          <div>
          </div>
          <div className="flex space-x-4">
            {Number(product.quantity) === 0 ? (
              <Button className="flex-1" disabled>
                Out of Stock
              </Button>
            ) : productInCart ? (
              <Button className="flex-1" disabled>
                <span className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>In Cart</span>
                </span>
              </Button>
            ) : (
              <Button className="flex-1" onClick={handleAddToCart}>Add to Cart</Button>
            )}
          </div>
          <Card>
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-blue-500" />
                <p className="text-sm">
                  100% secure delivery{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Details
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <p className="text-sm">
                  Delivers in: 3-7 Working Days.{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="prose max-w-none">
                <h3>Product Description</h3>
                <div className="prose" dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
