import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";
import pluginChecker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@/": path.resolve(__dirname, "src"),
			"@/assets": path.resolve(__dirname, "src/assets"),
			"@/helpers": path.resolve(__dirname, "src/helpers"),
			"@/pages": path.resolve(__dirname, "src/pages"),
			"@/components": path.resolve(__dirname, "src/components")
		}
	},
	plugins: [react(), pluginChecker({ typescript: true }), svgr()]
});
