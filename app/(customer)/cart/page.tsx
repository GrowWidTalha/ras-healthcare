"use client";

import { useCart } from "@/components/providers/CartContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCartIcon, Trash2 } from "lucide-react";
import CheckoutDrawer from "@/components/CheckOutBtn";
import Image from "next/image";
import Link from "next/link";
interface CartItemProps {
  item: any;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
}
const CartItem = ({ item, updateQuantity, removeFromCart }: CartItemProps) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      updateQuantity(item.$id, value);
    }
  };

  return (
    <Card>
      <div className="flex items-center p-4 gap-4">
        {/* Image container */}
        <Link href={`/products/${item.name}/${item.$id}`}>
          <div className="relative flex-shrink-0 w-24 h-24">
            <Image
              src={item.images[0]}
              alt={`Product image of ${item.name}`}
              fill
              className="object-cover rounded"
              sizes="96px"
              priority={false}
            />
          </div>
        </Link>

        {/* Product details container */}
        <div className="flex flex-col flex-grow gap-4 md:flex-row md:items-center md:justify-between">
          {/* Product name */}
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-lg font-semibold text-primary">
              Rs {parseFloat(item.price).toFixed(2)}
            </p>
          </div>

          {/* Quantity controls */}
          <div className="flex items-center gap-4">
            <div
              className="flex items-center space-x-2"
              role="group"
              aria-label="Quantity controls"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  updateQuantity(item.$id, Number(item.quantity) - 1)
                }
                disabled={Number(item.quantity) <= 1}
                aria-label="Decrease quantity"
                className="h-8 w-8"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Input
                type="number"
                min="1"
                value={item.quantity}
                onChange={handleQuantityChange}
                className="w-14 h-8 text-center"
                aria-label="Quantity"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  updateQuantity(item.$id, Number(item.quantity) + 1)
                }
                aria-label="Increase quantity"
                className="h-8 w-8"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            {/* Remove button */}
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeFromCart(item.$id)}
              aria-label={`Remove ${item.name} from cart`}
              className="h-8"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Remove
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
interface OrderSummaryProps {
  cart: any[];
  total: number;
  clearCart: () => void;
}

const OrderSummary = ({ cart, total, clearCart }: OrderSummaryProps) => (
  <Card className="h-fit sticky top-4">
    <CardHeader>
      <CardTitle>Order Summary</CardTitle>
    </CardHeader>
    <CardContent className="border-t">
      <div className="space-y-3">
        {cart.map((item) => (
          <div key={item.$id} className="flex justify-between text-sm">
            <span className="truncate pr-4 text-gray-600">
              {item.name} (x{item.quantity})
            </span>
            <span className="flex-shrink-0 font-medium">
              Rs {(parseFloat(item.price) * Number(item.quantity)).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-semibold text-primary">
            Rs {total.toFixed(2)}
          </span>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex flex-col space-y-2 border-t">
      <CheckoutDrawer />
      <Button
        variant="outline"
        className="w-full"
        onClick={clearCart}
        aria-label="Clear shopping cart"
      >
        Clear Cart
      </Button>
    </CardFooter>
  </Card>
);

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) =>
        total + (parseFloat(item.price) || 0) * Number(item.quantity),
      0
    );
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 w-full h-screen flex flex-col mt-20 items-center gap-10">
        <div className="flex flex-col items-center justify-center h-60 w-60 rounded-full bg-primary/20">
          <ShoppingCartIcon className="text-primary h-40 w-40 " />
        </div>
        <p className="text-gray-600 text-3xl font-bold">Your cart is empty.</p>
        <Button className="rounded-full font-bold" size={"lg"}>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const total = calculateTotal();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem
              key={item.$id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div>
          <OrderSummary cart={cart} total={total} clearCart={clearCart} />
        </div>
      </div>
    </main>
  );
}
