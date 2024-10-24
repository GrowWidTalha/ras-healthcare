import { Models } from "node-appwrite";

export interface Product extends Models.Document {
  name: string;
  description: string;
  price: string;
  quantity: string;
  images: string[];
}
export interface Order extends Models.Document {
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  delivery_address: string;
  delivery_city: string;
  delivery_state: string;
  price: string;
  number_of_items: number;
  order_items: string;
  status: "pending" | "confirmed"  | "shipped" | "completed" | "cancelled";
}
