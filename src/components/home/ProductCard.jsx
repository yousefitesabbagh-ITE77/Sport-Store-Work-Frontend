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
          <div className="image-placeholder">No image</div>
        )}

        {isBestSeller && (
          <span className="badge">Best Seller</span>
        )}
      </div>

      <div className="product-body">
        <h3>{product.productName}</h3>
        <p className="product-desc">{product.productDesc}</p>

        <div className="product-meta">
          <span>{moneyFormatter.format(product.productPrice || 0)}</span>
          <span>Qty: {product.productQunatity}</span>
        </div>

        <div className="product-footer">
          <span className="product-category">
            {categoryName || 'Unknown category'}
          </span>

          <span className="discount">
            Discount: {product.discountPercent}%
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard