"use client";
import React from "react";
import { Button } from "./ui/button";
import { useCart } from "./providers/CartContext";
import { Product } from "@/types/appwrite.types";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const AddtoCartButton = ({ product, className, ref }: { product: Product, className?: string, ref?: React.RefObject<HTMLButtonElement> }) => {
    const { addToCart, cart } = useCart();
    const isInCart = cart.some((item) => item.$id === product.$id);
    return (
        <>
            <Button onClick={() => addToCart(product, 1)} className="w-full bg-white size-5 rounded-full text-black">
                <ShoppingCart className="mr-2 h-4 w-4" />
            </Button>
        </>
    );
};

export default AddtoCartButton;
