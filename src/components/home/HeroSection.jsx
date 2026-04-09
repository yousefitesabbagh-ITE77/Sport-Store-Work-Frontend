function HeroSection({ banner }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="section-kicker">Sport Store MVP</p>

          {banner ? (
            <>
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
            </>
          ) : (
            <>
              <h2>ابدأ بناء متجر رياضي حقيقي خطوة بخطوة</h2>
              <p>
                هذه نسخة Frontend مربوطة مع الباك إند الحالي، ومجهزة لتطوير
                الصفحة الرئيسية قبل الانتقال إلى الصفحات الأخرى.
              </p>
            </>
          )}

          <div className="hero-actions">
            <a href="#products" className="primary-link">
              تصفح المنتجات
            </a>
            <a href="#best-sellers" className="secondary-link">
              أفضل المبيعات
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>Frontend</strong>
              <span>React + Vite</span>
            </div>
            <div className="hero-stat">
              <strong>Backend</strong>
              <span>Spring Boot API</span>
            </div>
            <div className="hero-stat">
              <strong>Data</strong>
              <span>PostgreSQL + Docker</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {banner?.imageUrl ? (
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="hero-image"
            />
          ) : (
            <div className="hero-placeholder-card">
              <span className="hero-placeholder-tag">No Hero Banner Yet</span>
              <h3>الهيكل أصبح جاهزًا</h3>
              <p>
                عندما يضيف صاحبك بيانات حقيقية للهوم من الباك إند، ستظهر هنا
                مباشرة.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection