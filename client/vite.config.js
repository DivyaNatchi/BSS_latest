import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from client/env/.env
dotenv.config({ path: path.resolve(__dirname, "env/.env") });

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env file
  const env = loadEnv(mode, process.cwd(), "VITE_");

  // You can access the environment variables using `env` like:
  // console.log(env.VITE_REACT_APP_API_PORT);

  return {
    plugins: [react()],
    // base: "/BSS/",
    server: {
      port: 5000, // Change the port to 5000
    },
    define: {
      "process.env": env, // Inject environment variables into the frontend
    },
  };
});
