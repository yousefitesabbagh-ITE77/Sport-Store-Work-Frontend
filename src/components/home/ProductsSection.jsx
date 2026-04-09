import ProductCard from './ProductCard'

function ProductsSection({
  products,
  imageMap,
  categoryMap,
  bestSellerIds,
}) {
  return (
    <section className="section-block" id="products">
      <div className="section-head">
        <div>
          <p className="section-kicker">Products API</p>
          <h2>منتجات المتجر</h2>
        </div>
        <p className="section-note">
          البيانات قادمة من الباك إند، والفلترة الحالية تتم من الفرونت إند مؤقتًا.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="state-card">لا توجد منتجات لعرضها.</div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              imageUrl={imageMap.get(product.id)}
              categoryName={categoryMap.get(product.categoryId)}
              isBestSeller={bestSellerIds.has(product.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductsSection