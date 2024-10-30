import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import CheckoutDrawer from "./CheckOutBtn";
import { useCart } from "./providers/CartContext";
import { useState } from "react";

interface OrderSummaryProps {
  isCheckout?: boolean;
}

const OrderSummary = ({ isCheckout = false }: OrderSummaryProps) => {
  const { cart, coupon, getTotalPrice, applyCoupon, removeCoupon } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const { total, subtotal } = getTotalPrice();

  const handleApplyCoupon = () => {
    applyCoupon(couponCode, 0, "");
  };

  return (
    <Card className={`${isCheckout ? "" : "h-fit sticky top-4"}`}>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="border-t">
        {isCheckout ? (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Subtotal:</span>
              <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Delivery Charges:</span>
              <span className="font-medium">Rs 200.00</span>
            </div>
            {coupon && (
              <div className="flex justify-between items-center text-green-600">
                <span className="text-sm">Discount ({coupon.code}):</span>
                <span className="font-medium">
                  - Rs {coupon.discountAmount.toFixed(2)}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-primary">Rs {(total + 200).toFixed(2)}</span>
            </div>
          </div>
        ) : (
          <>
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
            <div className="mt-6 pt-4 border-t space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Subtotal:</span>
                <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Delivery Charges:</span>
                <span className="font-medium">Rs 200.00</span>
              </div>
              {coupon && (
                <div className="flex justify-between items-center text-green-600">
                  <span className="text-sm">Discount ({coupon.code}):</span>
                  <span className="font-medium">
                    - Rs {coupon.discountAmount.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary">Rs {(total + 200).toFixed(2)}</span>
              </div>
              <div className="text-sm text-gray-600 bg-gray-100 p-2 rounded">
                <p>Payment Method: Cash on Delivery (COD)</p>
              </div>
            </div>
          </>
        )}
        {!isCheckout && (
          <div className="mt-4 space-y-2">
            {coupon ? (
              <div className="flex items-center justify-between bg-green-100 p-2 rounded">
                <span className="text-sm text-green-800">
                  Coupon applied: {coupon.code}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeCoupon}
                  aria-label="Remove coupon"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button onClick={handleApplyCoupon}>Apply</Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
      {!isCheckout && (
        <CardFooter className="flex flex-col space-y-2 border-t">
          <CheckoutDrawer />
        </CardFooter>
      )}
    </Card>
  );
};
export default OrderSummary;
