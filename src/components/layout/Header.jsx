function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand-block">
          <span className="brand-badge">Sport Store</span>
          <div>
            <h1 className="brand-title">واجهة تجريبية لمتجر رياضي</h1>
            <p className="brand-subtitle">
              أول نسخة منظمة لاختبار ربط الفرونت إند مع الباك إند
            </p>
          </div>
        </div>

        <nav className="header-nav">
          <a href="#hero">Home</a>
          <a href="#products">Products</a>
          <a href="#best-sellers">Best Sellers</a>
        </nav>

        <button
          className="refresh-btn"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    </header>
  )
}

export default Header