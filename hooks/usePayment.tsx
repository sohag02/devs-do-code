import { useState, useCallback } from "react";
import { createOrder, validateOrder } from "@/app/actions/payments";
import { doPayment } from "@/lib/cashfree";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast"

export const usePayment = (name: string, email: string, userid: string) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const { toast } = useToast()

  const calculateFinalAmount = (amount: number, type: "monthly" | "yearly") => {
    return type === "monthly" ? amount : amount * 12;
  };

  const handlePayment = useCallback(
    async (
      amount: number,
      type: "monthly" | "yearly" = "monthly",
      planId: string
    ) => {
      try {
        setIsProcessing(true);
        const finalAmount = calculateFinalAmount(amount, type);
        const order = await createOrder(finalAmount, name, email, userid);

        if (!order.paymentSessionId || !order.orderId) {
          throw new Error("Failed to create payment session");
        }

        await doPayment(order.paymentSessionId);

        const isSuccess = await validateOrder(order.orderId).catch((error) => {
          console.error("Validation failed:", error);
          return false;
        });

        if (isSuccess) {
          router.push(`/payment/success?plan_id=${planId}&type=${type}`);
        } else {
          throw new Error("Failed to validate payment");
        }
      } catch (error) {
        console.error("Payment failed:", error);
        toast({
          title: "Payment Failed",
          description: "Please try again later",
          variant: "destructive",
        })
      } finally {
        setIsProcessing(false);
      }
    },
    [name, email, userid, router, toast]
  );

  return { handlePayment, isProcessing };
};
