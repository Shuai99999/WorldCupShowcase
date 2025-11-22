import { useState, useEffect } from 'react'
import './ProductCard.css'

function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  const images = product.images && product.images.length > 0 ? product.images : []
  const hasMultipleImages = images.length > 1
  
  // Use a data URI for placeholder to avoid infinite loading loop
  const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4='
  
  const currentImage = images.length > 0 ? images[currentImageIndex] : null

  // Auto-rotate images on hover if multiple images exist
  useEffect(() => {
    if (!isHovered || !hasMultipleImages) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // Change image every 2 seconds

    return () => clearInterval(interval)
  }, [isHovered, hasMultipleImages, images.length])

  const handleImageError = (e) => {
    if (!imageError && currentImage) {
      setImageError(true)
      e.target.src = placeholderImage
    }
  }
  
  // Reset image error when image changes
  useEffect(() => {
    setImageError(false)
  }, [currentImageIndex])

  const handleImageClick = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  }

  const handleDotClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="product-card">
      <div 
        className="product-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={imageError || !currentImage ? placeholderImage : currentImage} 
          alt={product.name}
          className="product-image"
          onError={handleImageError}
          onClick={handleImageClick}
          loading="lazy"
          style={{ cursor: hasMultipleImages ? 'pointer' : 'default' }}
        />
        {hasMultipleImages && (
          <>
            <div className="image-count-badge">{images.length}</div>
            <div className="image-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`image-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDotClick(index)
                  }}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          {product.tags && product.tags.length > 0 && (
            <div className="product-tags">
              {product.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="product-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          {product.category && (
            <span className="product-category">{product.category}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard

