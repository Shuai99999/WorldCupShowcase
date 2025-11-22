import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 配置
// 如果你的仓库名是 WorldCupShowcase，base路径应该是 /WorldCupShowcase/
// 如果仓库名是 username.github.io（用户页面），base路径应该是 '/'
// 如果使用自定义域名，base路径也应该是 '/'
const REPO_NAME = process.env.VITE_REPO_NAME || 'WorldCupShowcase'

export default defineConfig({
  plugins: [react()],
  // 使用环境变量或默认仓库名
  base: process.env.VITE_BASE || (REPO_NAME.includes('.github.io') ? '/' : `/${REPO_NAME}/`),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
