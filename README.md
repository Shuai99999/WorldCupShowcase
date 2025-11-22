# 2026美加墨世界杯商品展示网站

一个简洁美观的世界杯商品展示网站，支持通过JSON配置文件轻松添加和管理商品。

## 功能特点

- 🎨 精美的2026美加墨世界杯主题设计
- 📦 通过JSON配置文件轻松添加商品
- 🖼️ 支持多图片展示
- 📱 响应式设计，支持手机、平板、电脑
- ⚡ 基于React + Vite，快速加载

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 如何添加商品

### 1. 准备商品图片

将商品图片放到 `public/products/` 目录下。

### 2. 编辑商品配置

打开 `src/data/products.json` 文件，按照以下格式添加商品：

```json
{
  "id": "product-001",
  "name": "商品名称",
  "description": "商品详细描述",
  "images": ["/products/图片名.jpg"],
  "category": "球衣",
  "tags": ["官方", "正品"],
  "source": "淘宝"
}
```

### 3. 保存即可

保存文件后，刷新浏览器即可看到新商品。

## 详细配置说明

请查看 `README_商品配置说明.md` 文件，了解更多配置细节。

## 项目结构

```
WorldCupShowcase/
├── public/
│   └── products/          # 商品图片目录
├── src/
│   ├── components/        # React组件
│   │   ├── Home.jsx       # 首页组件
│   │   ├── ProductCard.jsx # 商品卡片组件
│   │   └── ProductGrid.jsx # 商品网格组件
│   ├── data/
│   │   ├── products.json  # 商品数据（主要配置文件）
│   │   └── products.template.json # 配置模板
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 技术栈

- React 19
- Vite 7
- 纯CSS（无UI框架依赖）

## 注意事项

- 本项目仅用于商品展示，不涉及支付功能
- 商品信息来自淘宝、1688等批发渠道
- 图片加载失败时会自动显示占位图

## 许可证

MIT
