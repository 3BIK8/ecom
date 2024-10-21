// src/sanity/env.js
export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-08-22";
export const dataset = "production";
export const projectId = "o5usc49s";

// Optional: Log values for debugging
console.log("Project ID:", projectId);
console.log("Dataset:", dataset);
console.log("API Version:", apiVersion);
