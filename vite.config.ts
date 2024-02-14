import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/posts",
  plugins: [react()],
  server: {
    open: true,
  },
})
