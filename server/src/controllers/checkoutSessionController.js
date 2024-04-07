import { stripe } from "../server.js";

export const createCheckoutSession = async (req, res) => {
  const priceId = req.params.priceId;

  console.log(`Attempting to create checkout session with priceId: ${priceId}`);

  try {
    const session = await stripe.checkout.sessions.create({
      //   payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/payment-success",
      cancel_url: "http://localhost:5173/payment-cancel",
    });

    console.log(`Create checkout session with id: ${session.id}`);

    res.json({ id: session.id });
  } catch (error) {
    console.error(
      `Recieved error attempting to create checkout session: ${error}`
    );
    res.status(500).json({ message: error.message });
  }
};
