import { defineType } from "sanity";

export default defineType({
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		{
			name: "image",
			title: "Image",
			type: "array",
			of: [{ type: "image" }],
			options: {
				hotspot: true,
			},
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			name: "details",
			title: "Details",
			type: "string",
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
	],
});
