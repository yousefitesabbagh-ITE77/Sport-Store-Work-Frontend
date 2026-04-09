import { moneyFormatter } from '../../utils/formatters'

function ProductCard({ product, imageUrl, categoryName, isBestSeller }) {
  return (
    <article className="product-card">
      <div className="product-image-box">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.productName}
            className="product-image"
          />
        ) : (
          <div className="image-placeholder">
            <span>{product.productName}</span>
          </div>
        )}

        {isBestSeller && <span className="badge">Best Seller</span>}
      </div>

      <div className="product-body">
        <div className="product-topline">
          <span className="product-category-pill">
            {categoryName || 'Unknown category'}
          </span>
          <span className="discount">-{product.discountPercent || 0}%</span>
        </div>

        <h3>{product.productName}</h3>
        <p className="product-desc">{product.productDesc}</p>

        <div className="product-meta">
          <strong>{moneyFormatter.format(product.productPrice || 0)}</strong>
          <span>Qty: {product.productQunatity}</span>
        </div>

        <button className="product-action" type="button">
          View Details
        </button>
      </div>
    </article>
  )
}

export default ProductCard