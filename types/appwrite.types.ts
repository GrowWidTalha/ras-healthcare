import { Models } from "node-appwrite";

export interface Product extends Models.Document {
    name: string;
    description: string;
    price: string;
    quantity: string;
    images: string[];
}
