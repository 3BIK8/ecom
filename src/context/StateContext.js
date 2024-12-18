import React, { createContext, useContext, useState, useEffect } from "react";

import toast from "react-hot-toast";
import { set } from "sanity";

const Context = createContext();

export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [qty, setQty] = useState(1);

	let foundProduct;
	let index;

	const onAdd = (product, quantity) => {
		const checkProductInCart = cartItems.find(
			(item) => item._id === product._id
		);

		setTotalPrice(
			(prevTotalPrice) => prevTotalPrice + product.price * quantity
		);
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

		if (checkProductInCart) {
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					};
			});

			setCartItems(updatedCartItems);
		} else {
			product.quantity = quantity;

			setCartItems([...cartItems, { ...product }]);
		}
		toast.success(`${qty} ${product.name} added to the cart.`);
	};

	const onRemove = (product) => {
		foundProduct = cartItems.find((item) => item._id === product._id);
		const newCartItems = cartItems.filter((item) => item._id !== product._id);

		setTotalPrice(
			(pervTotalPrice) =>
				pervTotalPrice - foundProduct.price * foundProduct.quantity
		);

		setTotalQuantities((pervTotalQuantities) => {
			return pervTotalQuantities - foundProduct.quantity;
		});

		setCartItems(newCartItems);
	};

	const toggleCartItemQuantity = (id, value) => {
		setCartItems((prevCartItems) =>
			prevCartItems.map((item) => {
				if (item._id === id) {
					if (value === "inc") {
						setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
						setTotalQuantities(
							(prevTotalQuantities) => prevTotalQuantities + 1
						);
						return { ...item, quantity: item.quantity + 1 };
					} else if (value === "dec" && item.quantity > 1) {
						setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);
						setTotalQuantities(
							(prevTotalQuantities) => prevTotalQuantities - 1
						);
						return { ...item, quantity: item.quantity - 1 };
					}
				}
				return item;
			})
		);
	};

	const incQty = () => {
		setQty((prevQty) => prevQty + 1);
	};
	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;
			return prevQty - 1;
		});
	};
	return (
		<Context.Provider
			value={{
				showCart,
				setShowCart,
				cartItems,
				setCartItems,
				totalPrice,
				totalQuantities,
				qty,
				incQty,
				decQty,
				onAdd,
				toggleCartItemQuantity,
				onRemove,
				setTotalPrice,
				setTotalQuantities,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => {
	return useContext(Context);
};
