import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { getProducts } from '../../services/products.service'
import { IProduct } from '../../types/product.types'
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'

interface IProductsProps {
  selectedCategories: string[]
}

const Products: React.FC<IProductsProps> = props => {
  const { selectedCategories } = props
  const storedProducts = localStorage.getItem('products')
  const initialData = storedProducts ? JSON.parse(storedProducts) : undefined

  const skeletonList = Array.from(Array(12).keys())

  const { data, isLoading, isFetching, isError } = useQuery<IProduct[]>({
    queryKey: ['products'],
    initialData,
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000,
    retry: 5,
    refetchOnReconnect: true,
    placeholderData: initialData || undefined
  })

  useEffect(() => {
    if (data && data.length) {
      localStorage.setItem('products', JSON.stringify(data))
    }
  }, [data])

  const filteredData = useMemo(() => {
    if (!data) return []
    if (!selectedCategories.length) return data
    return data.filter(product => selectedCategories.includes(product.category))
  }, [data, selectedCategories])

  if (isLoading || isFetching)
    return skeletonList.map(index => <ProductCard.Skeleton key={`${index}-skeleton`} />)
  if (!isFetching && !isLoading && !filteredData.length) return <p>No products found</p>
  if (isError) return <p>Error: {isError}</p>

  return (
    <section className='products-container'>
      <h2 className='products-container__heading'>Products</h2>
      <section className='product-container__grid'>
        {filteredData.map((product, index) => (
          <ProductCard
            key={`${index}-product-${product.productId}`}
            {...product}
          />
        ))}
      </section>
    </section>
  )
}

export default Products
