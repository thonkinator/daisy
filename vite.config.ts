import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true, // needed for GH Codespaces, sorry if this causes issues for you
	},
});
