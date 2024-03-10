import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ command }) => {
    return defineConfig({
        base: "/",
        plugins: [react()],
        server: {
            port: 3000,
            host: "localhost",
        }
    });
};
