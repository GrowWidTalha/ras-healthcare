import { Models } from "node-appwrite";

export interface Product extends Models.Document {
  name: string;
  description: string;
  price: string;
  stock: string;
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

export interface Blog extends Models.Document {
  title: string;
  content: string;
  coverImage: string;
  slug: string;
}

export interface Settings extends Models.Document {
    topbar_enabled: boolean;
    topbar_text: string;
    topbar_bg_color: string;
    topbar_text_color: string;
}
