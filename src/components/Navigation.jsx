import './Navigation.css'

function Navigation() {
  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId)
    if (element) {
      const navHeight = 70 // Navigation bar height
      const offset = element.offsetTop - navHeight - 20
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <button 
          className="nav-link" 
          onClick={() => scrollToCategory('category-national-flags')}
        >
          National Flags
        </button>
        <button 
          className="nav-link" 
          onClick={() => scrollToCategory('category-face-sticker')}
        >
          Face Sticker
        </button>
        <button 
          className="nav-link" 
          onClick={() => scrollToCategory('category-cheering-accessories')}
        >
          Cheering Accessories
        </button>
      </div>
    </nav>
  )
}

export default Navigation

