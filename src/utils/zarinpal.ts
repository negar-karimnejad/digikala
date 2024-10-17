import axios from "axios";

const zarinpal = axios.create({
  baseURL: process.env.ZARINPAL_PAYMENT_BASE_URL,
});

export const createPayment = async ({ amountInRial, mobile, description }) => {
  try {
    const response = await zarinpal.post("/request.json", {
      merchant_id: process.env.ZARINPAL_PAYMENT_MERCHANT_ID,
      callback_url: process.env.ZARINPAL_PAYMENT_CALLBACK_URL,
      amount: amountInRial,
      description,
      metadata: {
        mobile,
      },
    });
    
    const data = response.data.data;
    console.log("Response ->", response);

    return {
      paymentUrl: `${process.env.ZARINPAL_PAYMENT_BASE_URL}/${data.authority}`,
      authority: data.authority,
    };
  } catch (error) {
    return error;
  }
};
export const verifyPayment = async ({ amountInRial, authority }) => {
  try {
    const response = await zarinpal.post("/verify.json", {
      merchant_id: process.env.ZARINPAL_PAYMENT_MERCHANT_ID,
      amount: amountInRial,
      authority,
    });

    return response.data;
  } catch (error) {
    return error.response?.data || error;
  }
};
