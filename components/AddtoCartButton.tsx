"use client";
import React from "react";
import { Button } from "./ui/button";
import { useCart } from "./providers/CartContext";
import { Product } from "@/types/appwrite.types";
import Link from "next/link";

const AddtoCartButton = ({ product }: { product: Product }) => {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some((item) => item.$id === product.$id);
  return (
    <>
      {isInCart ? (
        <Button asChild variant={"outline"}>
          <Link href={"/cart"}>Visit Cart</Link>
        </Button>
      ) : (
        <Button onClick={() => addToCart(product, 1)}>Add to Cart</Button>
      )}
    </>
  );
};

export default AddtoCartButton;
