import { moneyFormatter } from '../../utils/formatters'

function BestSellersSection({ bestSells }) {
  return (
    <section className="section-block" id="best-sellers">
      <div className="section-head">
        <div>
          <p className="section-kicker">Home API</p>
          <h2>Best Sellers</h2>
        </div>
        <p className="section-note">
          هذه القائمة قادمة من بيانات الصفحة الرئيسية في الباك إند.
        </p>
      </div>

      {bestSells?.length ? (
        <div className="best-seller-grid">
          {bestSells.map((product) => (
            <article key={product.id} className="best-seller-card">
              <div>
                <h3>{product.productName}</h3>
                <p>منتج ظاهر ضمن قائمة أفضل المبيعات الحالية.</p>
              </div>

              <strong>{moneyFormatter.format(product.productPrice || 0)}</strong>
            </article>
          ))}
        </div>
      ) : (
        <div className="state-card">لا توجد Best Sellers بعد.</div>
      )}
    </section>
  )
}

export default BestSellersSection