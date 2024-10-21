import React from "react";
import "../styles/global.css";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

function Home({ products, banner }) {
	return (
		<>
			<HeroBanner HeroBanner={banner.length && banner[0]} />
			<div className="products-heading">
				<h2>best selling products</h2>
				<p>speakers of many variations</p>
			</div>
			<div className="products-container">
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
			<FooterBanner footerBanner-={banner.length && banner[0]} />
		</>
	);
}

export const getServerSideProps = async () => {
	const products = await client.fetch(`*[_type == "product"]`);
	const banner = await client.fetch(`*[_type == "banner"]`);

	return {
		props: { products, banner },
	};
};

export default Home;
