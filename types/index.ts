export interface CreateProductParams {
  name: string;
  price: number;
  description: string;
  images: string[];
  quantity: number;
}
export interface CreateOrderProps {
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  delivery_address: string;
  delivery_city: string;
  delivery_state: string;
  price: number;
  number_of_items: number;
  order_items: string;
  status: "pending" | "confirmed" | "shipped" | "completed" | "cancelled";
}

export interface CreateBlogProps {
  title: string;
  content: string;
  coverImage: File[] | string | string[] | undefined;
  slug: string;
}
