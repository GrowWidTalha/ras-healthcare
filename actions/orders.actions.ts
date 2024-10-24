"use server"
import { DATABASE_ID, databases, ORDERS_COLLECTION_ID } from "@/lib/appwrite";
import { parseStringify } from "@/lib/utils";
import { CreateOrderProps } from "@/types";
import { ID } from "node-appwrite";

export const createOrder = async (orderData: CreateOrderProps )=> {
    try {
        const order = await databases.createDocument(
            DATABASE_ID!,
            ORDERS_COLLECTION_ID!,
            ID.unique(),
            {
                ...orderData,
                price: String(orderData.price)
            },
        )
        return parseStringify(order)
    } catch (error) {
        console.log("Error while Creating order: ", error)
    }
}

export const getOrderById = async (orderId: string) => {
    try {
        const order = await databases.getDocument(
            DATABASE_ID!,
            ORDERS_COLLECTION_ID!,
            orderId
        )

        return parseStringify(order)
    } catch (error) {
        console.log("error while fetching the order by Id: ", error)
    }
}
