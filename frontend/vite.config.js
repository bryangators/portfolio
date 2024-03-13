import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ command }) => {
    return defineConfig({
        base: "/",
        plugins: [react()],
        server: {
            host: "0.0.0.0",
            hmr: {
              clientPort: 3000,
            },
            port: 3000, 
            watch: {
              usePolling: true,
            },
          }
    });
};
