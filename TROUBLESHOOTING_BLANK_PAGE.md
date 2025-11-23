# 空白页面问题排查

## 可能的原因

空白页面通常不是emoji导致的，而是JavaScript加载失败。

## 诊断步骤

### 1. 检查浏览器控制台
- 按 F12 打开开发者工具
- 查看 Console 标签，看是否有红色错误
- 查看 Network 标签，刷新页面，看哪些文件返回404

### 2. 检查你的GitHub仓库名
- 你的仓库名是什么？
- 如果仓库名不是 `WorldCupShowcase`，需要修改 `vite.config.js`

### 3. 检查base路径
- 如果URL是 `https://用户名.github.io/WorldCupShowcase/`
- base路径应该是 `/WorldCupShowcase/`
- 如果URL是 `https://用户名.github.io/`
- base路径应该是 `/`

## 快速修复

### 方法1：确认并修改base路径

1. 告诉我你的GitHub Pages URL
2. 告诉我你的仓库名
3. 我会帮你修改 `vite.config.js` 中的base路径

### 方法2：临时硬编码base路径

如果仓库名是 `WorldCupShowcase`，修改 `vite.config.js`：

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/WorldCupShowcase/',  // 改成你的实际仓库名
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
```

### 方法3：检查GitHub Actions日志

1. 进入GitHub仓库
2. 点击 Actions 标签
3. 查看最新的部署日志
4. 看是否有构建错误

## 常见错误

**错误1：所有JS文件404**
- 原因：base路径不正确
- 解决：修改 `vite.config.js` 中的base路径

**错误2：构建失败**
- 原因：代码有错误或依赖问题
- 解决：查看GitHub Actions日志

**错误3：页面空白但无错误**
- 原因：可能是React渲染错误
- 解决：检查控制台是否有React错误

