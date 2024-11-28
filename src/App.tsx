import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import './App.css'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'

const queryClient = new QueryClient()

export default function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategorySelection = useCallback(
    (categoryId: string) => {
      setSelectedCategories(prevSelectedCategories =>
        prevSelectedCategories.includes(categoryId)
          ? prevSelectedCategories.filter(id => id !== categoryId)
          : [...prevSelectedCategories, categoryId]
      )
    },
    [selectedCategories]
  )

  return (
    <QueryClientProvider client={queryClient}>
      <section className='app-container'>
        <Categories
          selectedCategories={selectedCategories}
          handleCategorySelection={handleCategorySelection}
        />
        <Products selectedCategories={selectedCategories} />
      </section>
    </QueryClientProvider>
  )
}
