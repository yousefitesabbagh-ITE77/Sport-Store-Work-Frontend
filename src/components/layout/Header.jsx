function Header() {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Sport Store</p>
        <h1>لاختبار الباك إند Frontend أول نسخة</h1>
      </div>

      <button
        className="refresh-btn"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </header>
  )
}

export default Header