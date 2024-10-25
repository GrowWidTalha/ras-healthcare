import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideShoppingCart } from "lucide-react";
import { getOrderById } from "@/actions/orders.actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrderConfirmation = async ({
  searchParams,
}: {
  searchParams: any;
}) => {
  const { orderId } = await searchParams;
  const order = await getOrderById(String(orderId));
  console.log(order)
  const orderItems = JSON.parse(order.order_items);
  const subtotal = orderItems.reduce(
    (sum: number, item: any) => sum + Number(item.totalPrice),
    0
  );
  const shipping = 0;
  const discount = 0;
  const total = subtotal + shipping - discount;

  // Calculate estimated delivery (5-7 days from order date)
  const orderDate = new Date(order.$createdAt);
  const deliveryStart = new Date(orderDate);
  const deliveryEnd = new Date(orderDate);
  deliveryStart.setDate(orderDate.getDate() + 5);
  deliveryEnd.setDate(orderDate.getDate() + 7);
  const estimatedDelivery = `${deliveryStart.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  })} - ${deliveryEnd.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  })}`;

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center">
      <Card className="w-full max-w-2xl bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <LucideShoppingCart className="w-12 h-12 text-blue-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Thanks for your purchase!
            </h1>
            <p className="text-gray-600">
              We&apos;ve sent a confirmation email to {order.customer_email}{" "}
              with the order details.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Subtotal ({order.number_of_items} items)
                  </span>
                  <span className="font-medium">₨{subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shop discount</span>
                    <span className="font-medium text-green-600">
                      -₨{discount.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping fee</span>
                  <span className="font-medium">₨{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-4 border-t">
                  <span>Total</span>
                  <span>₨{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-4">
                    Estimated Delivery date: {estimatedDelivery}
                  </h3>
                  <div className="space-y-4">
                    {orderItems.map((item: any) => (
                      <div key={item.productId} className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <div className="flex justify-between mt-1 text-sm text-gray-600">
                            <span>x {item.quantity}</span>
                            <span>₨{Number(item.price).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Order number #{order.$id}
                </p>
                <p className="text-sm text-gray-600">
                  Status: <span className="capitalize">{order.status}</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Button size={"lg"}  className="rounded-full mt-5">
        <Link href="/products">
        Continue Shopping
        </Link>
      </Button>
    </div>
  );
};

export default OrderConfirmation;
