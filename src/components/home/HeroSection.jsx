function HeroSection({ banner }) {
  return (
    <section className="hero-section">
      {banner ? (
        <>
          <div className="hero-content">
            <p className="eyebrow">Home API</p>
            <h2>{banner.title}</h2>
            <p>{banner.subtitle}</p>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="hero-image"
            />
          </div>
        </>
      ) : (
        <div className="empty-hero">
          <p className="eyebrow">Home API</p>
          <h2>لا يوجد Hero Banner بعد</h2>
          <p>هذا طبيعي إذا لم يتم إدخال بيانات للهوم بعد.</p>
        </div>
      )}
    </section>
  )
}

export default HeroSection