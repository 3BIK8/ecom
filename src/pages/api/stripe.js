import Stripe from "stripe";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === "POST") {
		console.log(req.body.cartItems);

		try {
			const params = {
				submit_type: "pay",
				mode: "payment",
				payment_method_types: ["card"],
				billing_address_collection: "auto",
				shipping_options: [
					{ shipping_rate: "shr_1QIUQLB3xDJZBf5HvVEcdrTY" },
					{ shipping_rate: "shr_1QIURWB3xDJZBf5HglkZaciF" },
				],
				line_items: req.body.cartItems.map((item) => {
					const img = item.image[0].asset._ref;
					const newImage = img
						.replace(
							"image-",
							"https://cdn.sanity.io/images/o5usc49s/production/"
						)
						.replace("-webp", ".webp");

					console.log("image", newImage);
				}),
				mode: "payment",
				success_url: `${req.headers.origin}/?success=true`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			};
			const session = await stripe.checkout.sessions.create(params);
			console.log(session.urlrmas);
			res.redirect(303, session.url);
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
