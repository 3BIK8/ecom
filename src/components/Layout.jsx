import React from "react";
import Head from "next/head";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Head>
				<title>3BIK8 Store</title>
			</Head>
			<header>
				<Navbar />
			</header>
			<main className="main-content">{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
