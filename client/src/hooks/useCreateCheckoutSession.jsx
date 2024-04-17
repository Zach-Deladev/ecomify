import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51P2y0FBrCykgLipTFQqTKdEu4GSUB7vDG3IFCmkLu4ONdYZD9ICO4CRWELAMcLKGOMzVtgBsPNY8D74rGDop86xw00qaqfqfSb"
);

const useCreateCheckoutSession = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createCheckoutSession = async (priceId) => {
    try {
      setLoading(true);
      setError(null);

      const stripe = await stripePromise;
      const response = await fetch(
        `https://ecomify-backend.onrender.com/api/checkout-sessions/create/${priceId}`,
        { method: "POST" }
      );
      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createCheckoutSession };
};

export default useCreateCheckoutSession;
