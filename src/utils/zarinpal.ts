const { default: axios } = require("axios");

const zarinpal = axios.create({
  baseURL: process.env.ZARINPAL_API_BASE_URL,
});

export const createPayment = async ({ amountInRial, mobile, description }) => {
  try {
    const response = await zarinpal.post("/request.json", {
      merchant_id: process.env.ZARINPAL_PAYMENT_MERCHANT_ID,
      amount: amountInRial,
      description,
      callback_url: process.env.ZARINPAL_PAYMENT_CALLBACK_URL,
      metadata: {
        mobile,
      },
    });

    const data = response.data.data;

    return {
      paymentUrl: `${process.env.ZARINPAL_PAYMENT_BASE_URL}/${data.authority}`,
      authority: data.authority,
    };
  } catch (err) {
    return err;
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
  } catch (err) {
    return err.response?.data || err;
  }
};
