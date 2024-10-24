"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useCart } from "./providers/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle
} from "@/components/ui/drawer";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createOrder } from "@/actions/orders.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMediaQuery } from "usehooks-ts";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(11, "Phone number must be at least 11 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z.string().min(5, "Postal code must be at least 5 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
});

export default function CheckoutDrawer() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">Checkout</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
            <DialogHeader>
                <DialogTitle>
                    Checkout
                </DialogTitle>
            </DialogHeader>
          <CheckOutForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="w-full">Check out</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Checkout</DrawerTitle>
        <CheckOutForm />
      </DrawerContent>
    </Drawer>
  );
}

const CheckOutForm = () => {
  const { cart, clearCart, getTotalPrice, getTotalItems, getOrderItems } =
    useCart();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      state: "",
      country: "",
    },
  });

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const order = createOrder({
        customer_name: values.fullName,
        customer_email: values.email,
        customer_phone: values.phone,
        delivery_address: values.address,
        delivery_city: values.city,
        delivery_state: values.state,
        price: Number(getTotalPrice()),
        number_of_items: getTotalItems(),
        order_items: JSON.stringify(getOrderItems()),
        status: "pending",
      });
      toast.promise(order, {
        success: "Order Placed Successfully",
        loading: "Order is being placed",
        error: "Something went wrong",
      });
      order.then((data) => {
        clearCart();
        router.push(`/success?orderId=${data.$id}`);
      });
    } catch (error) {
      console.log("Error while creating order: ", error);
    }
  };

  return (
    <div className="p-4 space-y-4 mb-10 max-h-[70vh] overflow-y-auto">
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {cart.map((item) => (
              <div key={item.$id} className="flex justify-between">
                <span>{item.name}</span>
                <span>Rs {Number(item.price).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-semibold">
                Rs {calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+92 300 1234567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="New York" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="10001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="NY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="United States" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Place Order
          </Button>
        </form>
      </Form>
    </div>
  );
};
