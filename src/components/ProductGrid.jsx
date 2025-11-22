import './ProductGrid.css'
import ProductCard from './ProductCard'

function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <p>No products available</p>
        <p className="empty-hint">Please add product information in src/data/products.json</p>
      </div>
    )
  }

  // Group products by category
  const categories = {
    "National Flags": [],
    "Face Sticker": [],
    "Cheering Accessories": []
  }

  products.forEach(product => {
    if (categories[product.category]) {
      categories[product.category].push(product)
    }
  })

  return (
    <div className="product-grid-container">
      {/* National Flags Category */}
      {categories["National Flags"].length > 0 && (
        <div id="category-national-flags" className="product-category-section">
          <h3 className="category-title">National Flags</h3>
          <div className="product-grid">
            {categories["National Flags"].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Face Sticker Category */}
      {categories["Face Sticker"].length > 0 && (
        <div id="category-face-sticker" className="product-category-section">
          <h3 className="category-title">Face Sticker</h3>
          <div className="product-grid">
            {categories["Face Sticker"].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Cheering Accessories Category */}
      {categories["Cheering Accessories"].length > 0 && (
        <div id="category-cheering-accessories" className="product-category-section">
          <h3 className="category-title">Cheering Accessories</h3>
          <div className="product-grid">
            {categories["Cheering Accessories"].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductGrid
