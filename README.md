# 2026 World Cup Showcase

A beautiful World Cup merchandise showcase website built with React and Vite.

## Features

- 🎨 Beautiful 2026 World Cup theme design
- 📦 Easy product management via JSON configuration
- 🖼️ Multi-image support with carousel
- 📱 Responsive design for mobile, tablet, and desktop
- ⚡ Built with React + Vite for fast loading

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment using GitHub Actions.

### Setup Steps:

1. **Configure Repository Settings**
   - Go to your GitHub repository
   - Click `Settings` → `Pages`
   - Under `Source`, select `GitHub Actions`

2. **Push Code to GitHub**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages"
   git push origin main
   ```

3. **Automatic Deployment**
   - GitHub Actions will automatically build and deploy
   - Your site will be available at: `https://your-username.github.io/WorldCupShowcase/`

### Important: Base Path Configuration

If your repository name is different from `WorldCupShowcase`, you need to update `vite.config.js`:

```javascript
// If your repo is named "MyProject", change line 10 to:
base: '/MyProject/',

// If using a custom domain or username.github.io, use:
base: '/',
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## Adding Products

Products are configured in `src/data/products.json`. See [HOW_TO_ADD_PRODUCTS.md](./HOW_TO_ADD_PRODUCTS.md) for detailed instructions.

### Quick Example:

```json
{
  "id": "product-001",
  "name": "Product Name",
  "description": "Product description",
  "images": ["/products/image.png"],
  "category": "Accessories",
  "tags": ["Tag1", "Tag2"]
}
```

## Project Structure

```
WorldCupShowcase/
├── public/
│   └── products/          # Product images
├── src/
│   ├── components/        # React components
│   ├── data/
│   │   └── products.json  # Product data
│   └── ...
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions deployment
```

## Tech Stack

- React 19
- Vite 7
- Pure CSS (no UI framework)

## License

MIT
