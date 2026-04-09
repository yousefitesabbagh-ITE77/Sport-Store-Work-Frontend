function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>التصنيفات</h2>
        <p>هذه البيانات قادمة من /api/categories</p>
      </div>

      <div className="category-list">
        <button
          className={activeCategory === 'all' ? 'category-chip active' : 'category-chip'}
          onClick={() => onSelectCategory('all')}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className={
              activeCategory === category.categoryName
                ? 'category-chip active'
                : 'category-chip'
            }
            onClick={() => onSelectCategory(category.categoryName)}
          >
            {category.categoryName}
          </button>
        ))}
      </div>
    </section>
  )
}

export default CategoryFilter