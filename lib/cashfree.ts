/* eslint-disable @typescript-eslint/no-explicit-any */
import { load } from "@cashfreepayments/cashfree-js";

let cashfree: any;

export const initializeCashfree = async () => {
  if (!cashfree) {
    cashfree = await load({
      mode: "sandbox",
    });
  }
  return cashfree;
};

export const doPayment = async (paymentSessionId: string) => {
  const cf = await initializeCashfree();
  return new Promise((resolve, reject) => {
    const checkoutOptions = {
      paymentSessionId: paymentSessionId,
      redirectTarget: "_modal",
    };
    cf.checkout(checkoutOptions).then((result : any) => {
      if (result.error) {
        // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
				reject(result.error);
      }
      if (result.redirect) {
        // This will be true when the payment redirection page couldnt be opened in the same window
        // This is an exceptional case only when the page is opened inside an inAppBrowser
        // In this case the customer will be redirected to return url once payment is completed
        console.log("Payment will be redirected");
      }
      if (result.paymentDetails) {
        // This will be called whenever the payment is completed irrespective of transaction status
				resolve(result.paymentDetails);
      }
    });
  });
};
