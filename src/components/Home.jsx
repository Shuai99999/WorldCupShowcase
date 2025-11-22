import './Home.css'
import ProductGrid from './ProductGrid'
import Navigation from './Navigation'
import productsData from '../data/products.json'
import { getImagePath } from '../utils/imagePath'

function Home() {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="worldcup-year">2026</span>
            <span className="worldcup-countries">USA · CANADA · MEXICO</span>
          </div>
          <h1 className="hero-title">
            <span className="title-main">World Cup</span>
            <span className="title-sub">Showcase</span>
          </h1>
          <p className="hero-description">
            Premium fan merchandise and match-day accessories for local retailers
          </p>
          <div className="hero-countries">
            <img 
              src={getImagePath('/flags/us.svg')}
              alt="USA" 
              className="country-flag flag-icon"
              loading="eager"
            />
            <img 
              src={getImagePath('/flags/ca.svg')}
              alt="Canada" 
              className="country-flag flag-icon"
              loading="eager"
            />
            <img 
              src={getImagePath('/flags/mx.svg')}
              alt="Mexico" 
              className="country-flag flag-icon"
              loading="eager"
            />
          </div>
        </div>
        <div className="hero-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </header>

      <Navigation />

      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Discover our collection of World Cup merchandise</p>
        </div>
        <ProductGrid products={productsData} />
      </section>

      <footer className="footer">
        <p>© 2026 World Cup Showcase | Display Only</p>
      </footer>
    </div>
  )
}

export default Home

