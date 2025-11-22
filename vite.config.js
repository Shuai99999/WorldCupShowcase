import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 配置
// 如果你的仓库名是 WorldCupShowcase，base路径应该是 /WorldCupShowcase/
// 如果仓库名是 username.github.io（用户页面），base路径应该是 '/'
// 如果使用自定义域名，base路径也应该是 '/'

export default defineConfig(({ mode }) => {
  // 加载环境变量 - loadEnv 会自动处理 process.cwd()
  const env = loadEnv(mode, process.cwd(), '')
  
  // 获取base路径 - 优先使用环境变量（GitHub Actions会设置）
  function getBasePath() {
    // GitHub Actions会设置 VITE_BASE 环境变量
    // 在构建时，环境变量会被正确传递
    if (env.VITE_BASE) {
      return env.VITE_BASE
    }
    
    // 开发环境或本地构建，使用默认值
    const REPO_NAME = env.VITE_REPO_NAME || 'WorldCupShowcase'
    
    // 如果是github.io用户页面，使用根路径
    if (REPO_NAME.includes('.github.io')) {
      return '/'
    }
    
    // 否则使用仓库名作为base路径
    return `/${REPO_NAME}/`
  }

  const basePath = getBasePath()

  return {
    plugins: [react()],
    base: basePath,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  }
})
