import ProductCard from './ProductCard'

function ProductsSection({
  products,
  imageMap,
  categoryMap,
  bestSellerIds,
}) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>المنتجات</h2>
        <p>
          هذه البيانات قادمة من /api/products
          {' '}والفلترة هنا مؤقتًا من الفرونت إند نفسه
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