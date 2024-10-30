"use server"
import { DATABASE_ID, databases, ORDERS_COLLECTION_ID } from "@/lib/appwrite";
import { parseStringify } from "@/lib/utils";
import { CreateOrderProps } from "@/types";
import { ID } from "node-appwrite";

export const createOrder = async (orderData: CreateOrderProps )=> {
    try {
        console.log(orderData)
        const order = await databases.createDocument(
            DATABASE_ID!,
            ORDERS_COLLECTION_ID!,
            ID.unique(),
            {
               customer_name: orderData.customer_name,
               customer_phone: orderData.customer_phone,
               customer_email: orderData.customer_email,
               delivery_address: orderData.delivery_address,
               delivery_city: orderData.delivery_city,
               delivery_state: orderData.delivery_state,
               price: orderData.price,
               number_of_items: orderData.number_of_items,
               order_items: orderData.order_items,
               status: "pending",
               couponApplied: orderData.couponApplied,
               coupon: orderData.coupon_code,
               discountedPrice: orderData.discountedPrice,
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
