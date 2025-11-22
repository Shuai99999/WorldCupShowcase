import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// GitHub Pages 配置
// 根据你的URL: https://shuai99999.github.io/WorldCupShowcase/
// base路径应该是 /WorldCupShowcase/
// 如果仓库名不同，请修改下面的base路径

export default defineConfig({
  // GitHub Pages base路径 - 根据你的实际仓库名修改
  base: "/WorldCupShowcase/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
