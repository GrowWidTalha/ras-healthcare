"use client"

import { useState } from "react"
import { useCart } from "@/components/providers/CartContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2 } from "lucide-react"
import CheckoutDrawer from "@/components/CheckOutBtn"

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    cart.reduce((acc, item) => ({ ...acc, [item.$id]: 1 }), {})
  )

  const updateQuantity = (productId: string, newQuantity: number) => {
    setQuantities((prev) => ({ ...prev, [productId]: Math.max(1, newQuantity) }))
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price) || 0) * (quantities[item.$id] || 1), 0)
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.$id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">Rs {parseFloat(item.price).toFixed(2)}</p>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.$id, quantities[item.$id] - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      value={quantities[item.$id]}
                      onChange={(e) => updateQuantity(item.$id, parseInt(e.target.value))}
                      className="w-16 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.$id, quantities[item.$id] + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" onClick={() => removeFromCart(item.$id)}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.$id} className="flex justify-between">
                    <span>{item.name} (x{quantities[item.$id]})</span>
                    <span>Rs {(parseFloat(item.price) * quantities[item.$id]).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-semibold">Rs {calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <CheckoutDrawer />
              <Button variant="outline" className="w-full" onClick={clearCart}>
                Clear Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
