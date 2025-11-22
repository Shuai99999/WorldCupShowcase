import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 配置
// 如果你的仓库名是 WorldCupShowcase，base路径应该是 /WorldCupShowcase/
// 如果仓库名是 username.github.io（用户页面），base路径应该是 '/'
// 如果使用自定义域名，base路径也应该是 '/'
const REPO_NAME = process.env.VITE_REPO_NAME || 'WorldCupShowcase'

// 根据环境变量设置base路径
function getBasePath() {
  // 如果设置了VITE_BASE环境变量，优先使用
  if (process.env.VITE_BASE) {
    return process.env.VITE_BASE
  }
  
  // 如果是github.io用户页面，使用根路径
  if (REPO_NAME.includes('.github.io')) {
    return '/'
  }
  
  // 否则使用仓库名作为base路径
  return `/${REPO_NAME}/`
}

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
