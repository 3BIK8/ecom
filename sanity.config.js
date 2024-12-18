"use client";

// sanity.config.js
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	schema,
	plugins: [
		structureTool({ structure }),
		visionTool({ defaultApiVersion: apiVersion }),
	],
});
