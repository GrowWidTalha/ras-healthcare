"use client";
import React from "react";
import { Button } from "./ui/button";
import { useCart } from "./providers/CartContext";
import { Product } from "@/types/appwrite.types";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const AddtoCartButton = ({ product }: { product: Product }) => {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some((item) => item.$id === product.$id);
  return (
    <>
      {isInCart ? (
        <Button className="w-full" asChild variant={"outline"}>
          <Link href={"/cart"}>Visit Cart</Link>
        </Button>
      ) : (
        <Button
          onClick={() => addToCart(product, 1)}
          className="w-full gap-2"
          variant={"outline"}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      )}
    </>
  );
};

export default AddtoCartButton;
