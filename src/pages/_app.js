import React from "react";
import { Toaster } from "react-hot-toast";
import "../styles/global.css";
import Layout from "../components/Layout.jsx";

import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
	return (
		<StateContext>
			<Layout>
				<Toaster />
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	);
}

export default MyApp;
