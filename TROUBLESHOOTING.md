# 部署问题排查指南

## 空白页面问题

如果部署后看到空白页面，通常是base路径配置不正确导致的。

### 诊断步骤

1. **打开浏览器控制台（F12）**
   - 查看是否有404错误
   - 检查JS/CSS文件是否加载失败

2. **查看实际访问的URL**
   - 你的网站URL是什么？
   - 格式是：`https://用户名.github.io/仓库名/` 吗？

3. **检查base路径是否匹配**
   - 如果URL是 `https://username.github.io/WorldCupShowcase/`
   - base路径应该是 `/WorldCupShowcase/`
   - 如果URL是 `https://username.github.io/`
   - base路径应该是 `/`

### 快速修复

#### 方法1：根据你的实际URL修改 `vite.config.js`

如果你的实际URL是：`https://你的用户名.github.io/WorldCupShowcase/`

修改 `vite.config.js` 第13行：
```javascript
base: '/WorldCupShowcase/',
```

如果你的仓库名不同（比如 `MyProject`）：
```javascript
base: '/MyProject/',
```

#### 方法2：使用环境变量

在 `vite.config.js` 中直接设置：
```javascript
base: process.env.VITE_BASE || '/WorldCupShowcase/',
```

然后在 `.github/workflows/deploy.yml` 中设置：
```yaml
env:
  VITE_BASE: '/你的实际仓库名/'
```

### 验证方法

1. **访问debug页面**（如果有）
   - `https://你的用户名.github.io/你的仓库名/debug.html`
   - 这会显示当前路径信息

2. **查看构建产物**
   - 检查 `dist/index.html` 中的资源路径
   - 应该是以 `/你的仓库名/assets/` 开头

3. **手动测试**
   - 打开浏览器控制台
   - 查看Network标签
   - 看哪些文件返回404

### 常见问题

**问题1：所有JS/CSS文件404**
- 原因：base路径不正确
- 解决：修改 `vite.config.js` 中的 `base` 路径

**问题2：只有图片加载失败**
- 原因：图片路径没有包含base路径
- 解决：确保图片路径以base路径开头（Vite会自动处理）

**问题3：页面可以访问但功能不工作**
- 原因：可能是构建问题
- 解决：检查GitHub Actions日志是否有错误

### 快速修复步骤

1. 告诉我你的实际GitHub Pages URL
2. 我会帮你修改 `vite.config.js` 中的base路径
3. 重新推送代码：
   ```bash
   git add .
   git commit -m "Fix base path"
   git push origin main
   ```
4. 等待GitHub Actions重新部署

