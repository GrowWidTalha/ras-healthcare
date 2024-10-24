"use client";
import React from "react";
import { Button } from "./ui/button";
import { useCart } from "./providers/CartContext";
import { Product } from "@/types/appwrite.types";

const AddtoCartButton = ({ product }: { product: Product }) => {
  const { addToCart, removeFromCart, cart } = useCart();
  const isInCart = cart.some((item) => item.$id === product.$id);
  return (
    <Button
      onClick={() =>
        isInCart ? removeFromCart(product.$id) : addToCart(product, 1)
      }
    >
      {isInCart ? "Remove from Cart" : "Add to Cart"}
    </Button>
  );
};

export default AddtoCartButton;
