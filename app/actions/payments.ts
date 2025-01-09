"use server";

import { Cashfree } from "cashfree-pg";
import { type CreateOrderRequest } from "cashfree-pg";

Cashfree.XClientId = process.env.CASHFREE_CLIENT_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

const API_VERSION = "2023-08-01";

export interface Order {
  orderId: string | null;
  paymentSessionId: string | null;
}

export async function createOrder(amount: number, name: string, email: string, user_id: string): Promise<Order> {
  const OrderRequest: CreateOrderRequest = {
    order_amount: amount,
    order_currency: "INR",
    customer_details: {
      customer_id: user_id,
      customer_email: email,
      customer_name: name,
      customer_phone: "9999999999",
    },
    order_note: "",
  };

  try {
    const response = await Cashfree.PGCreateOrder(API_VERSION, OrderRequest);
    const a = response.data;
    return {
      orderId: a.order_id,
      paymentSessionId: a.payment_session_id,
    } as Order;
  } catch (error) {
    console.error("Error setting up order request:", error);
    return {
      orderId: null,
      paymentSessionId: null,
    } as Order;
  }
}

export async function validateOrder(orderId: string) {
  try {
    const res = await Cashfree.PGFetchOrder(API_VERSION, orderId);
    const data = res.data;
    const success = data.order_status === "PAID";
    if (success) {
      // Handle successful payment
      // call backend to update user plan
      console.log("Validation successful");
      return true;
    } else {
      console.log("Validation failed");
      // Handle failed payment
      return false;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error validating order:", error.message);
    } else {
      console.error("Error validating order:", error);
    }
    return false;
  }
}
