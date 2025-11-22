# GitHub Pages 部署指南

## 方法一：使用 GitHub Actions（推荐）

这是最简单的方法，代码推送到GitHub后会自动构建和部署。

### 步骤：

1. **配置仓库设置**
   - 进入你的GitHub仓库
   - 点击 `Settings`（设置）
   - 在左侧菜单找到 `Pages`（页面）
   - 在 `Source` 下选择 `GitHub Actions`

2. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **等待自动部署**
   - GitHub Actions会自动运行
   - 完成后，网站会在 `https://你的用户名.github.io/WorldCupShowcase/` 可用

### 修改 base 路径

如果你的仓库名不是 `WorldCupShowcase`，需要修改 `vite.config.js`：

```javascript
// 如果仓库名是 MyProject，改为：
base: '/MyProject/',

// 如果你的仓库名是 username.github.io（用户页面），改为：
base: '/',
```

## 方法二：手动部署

如果你想手动部署：

1. **安装 gh-pages 包**（已添加到 package.json）
   ```bash
   npm install
   ```

2. **构建项目**
   ```bash
   npm run build
   ```

3. **部署到 GitHub Pages**
   ```bash
   npm run deploy
   ```

   注意：第一次运行前，需要确保：
   - 仓库已连接GitHub
   - 已安装 gh-pages：`npm install gh-pages --save-dev`

## 重要提示

### Base 路径设置

GitHub Pages的URL取决于你的仓库类型：

1. **项目页面**（如 `username.github.io/WorldCupShowcase`）
   - Base路径：`/WorldCupShowcase/`
   - 必须与仓库名一致

2. **用户/组织页面**（如 `username.github.io`）
   - Base路径：`/`
   - 仓库名必须是 `username.github.io`

3. **自定义域名**
   - Base路径：`/`
   - 需要在仓库根目录添加 `CNAME` 文件

### 检查当前配置

查看 `vite.config.js` 中的 `base` 配置，确保与你的仓库名匹配。

## 验证部署

部署成功后，访问：
- `https://你的用户名.github.io/WorldCupShowcase/`

如果页面空白或资源加载失败，检查：
1. Base路径是否正确
2. 浏览器控制台是否有404错误
3. 图片路径是否正确（确保路径以 `/WorldCupShowcase/products/` 开头）

## 更新网站

每次更新代码后，只需：
```bash
git add .
git commit -m "Update products"
git push origin main
```

GitHub Actions会自动重新构建和部署。

