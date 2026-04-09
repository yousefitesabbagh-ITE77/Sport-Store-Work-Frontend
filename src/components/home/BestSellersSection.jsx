import { moneyFormatter } from '../../utils/formatters'

function BestSellersSection({ bestSells }) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>Best Sellers</h2>
        <p>هذه البيانات قادمة من /api/home</p>
      </div>

      {bestSells?.length ? (
        <div className="best-seller-list">
          {bestSells.map((product) => (
            <div key={product.id} className="best-seller-item">
              <strong>{product.productName}</strong>
              <span>{moneyFormatter.format(product.productPrice || 0)}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="state-card">لا توجد Best Sellers بعد.</div>
      )}
    </section>
  )
}

export default BestSellersSection