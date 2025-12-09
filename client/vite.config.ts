import {
	defineConfig
} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {
	description,
	keywords,
	name
} from "./src/content.tsx";

// https://vite.dev/config/
export default defineConfig( {
	plugins: [
		react()
	],
	define: {
		"import.meta.env.NAME": JSON.stringify( name ),
		"import.meta.env.DESCRIPTION": JSON.stringify( description ),
		"import.meta.env.KEYWORDS": JSON.stringify( keywords ),
		"import.meta.env.VITE_API_GATEWAY_ENDPOINT": JSON.stringify( process.env.VITE_API_GATEWAY_ENDPOINT || "" ),
	},
	resolve: {
		alias: {
			"@": path.resolve(
				__dirname,
				"./src"
			),
		}
	},
} );
