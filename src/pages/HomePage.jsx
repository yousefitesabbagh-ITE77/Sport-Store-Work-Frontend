import { useEffect, useMemo, useState } from 'react'
import { api } from '../services/api'
import Header from '../components/layout/Header'
import LoadingState from '../components/feedback/LoadingState'
import ErrorState from '../components/feedback/ErrorState'
import HeroSection from '../components/home/HeroSection'
import CategoryFilter from '../components/home/CategoryFilter'
import ProductsSection from '../components/home/ProductsSection'
import BestSellersSection from '../components/home/BestSellersSection'
import '../index.css'

function HomePage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [productImages, setProductImages] = useState([])
  const [homeData, setHomeData] = useState({
    heroBannerDtos: [],
    bestSells: [],
  })

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError('')

        const [categoriesRes, productsRes, imagesRes, homeRes] = await Promise.all([
          api.get('/api/categories'),
          api.get('/api/products'),
          api.get('/api/product-images'),
          api.get('/api/home'),
        ])

        setCategories(categoriesRes.data || [])
        setProducts(productsRes.data || [])
        setProductImages(imagesRes.data || [])
        setHomeData(
          homeRes.data || {
            heroBannerDtos: [],
            bestSells: [],
          }
        )
      } catch (err) {
        setError('فشل تحميل البيانات من الباك إند. تأكد أن الباك إند يعمل على localhost:8090')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const categoryMap = useMemo(() => {
    const map = new Map()
    categories.forEach((category) => {
      map.set(category.id, category.categoryName)
    })
    return map
  }, [categories])

  const imageMap = useMemo(() => {
    const map = new Map()
    productImages.forEach((image) => {
      if (!map.has(image.productId)) {
        map.set(image.productId, image.url)
      }
    })
    return map
  }, [productImages])

  const bestSellerIds = useMemo(() => {
    return new Set((homeData.bestSells || []).map((product) => product.id))
  }, [homeData])

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products

    return products.filter((product) => {
      const categoryName = categoryMap.get(product.categoryId)
      return categoryName === activeCategory
    })
  }, [activeCategory, products, categoryMap])

  const firstBanner = homeData.heroBannerDtos?.[0]

  if (loading) {
    return <LoadingState />
  }

  if (error) {
    return <ErrorState message={error} />
  }

  return (
    <div className="page-shell">
      <Header />

      <HeroSection banner={firstBanner} />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <ProductsSection
        products={filteredProducts}
        imageMap={imageMap}
        categoryMap={categoryMap}
        bestSellerIds={bestSellerIds}
      />

      <BestSellersSection bestSells={homeData.bestSells} />
    </div>
  )
}

export default HomePage