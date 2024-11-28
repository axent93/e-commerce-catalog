import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getCategories } from '../../services/categories.service'
import { ICategory } from '../../types/category.types'
import RenderCategories from '../RenderCategoriesList/RenderCategoriesList'
import './Categories.css'

interface ICategoriesProps {
  selectedCategories: string[]
  handleCategorySelection: (categoryId: string) => void
}

const Categories: React.FC<ICategoriesProps> = props => {
  const { selectedCategories, handleCategorySelection } = props
  const storedProducts = localStorage.getItem('categories')
  const initialData = storedProducts ? JSON.parse(storedProducts) : undefined

  const { data, isLoading, isFetching, isError } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    initialData,
    queryFn: getCategories,
    retry: 5,
    staleTime: 5 * 60 * 1000,
    refetchOnReconnect: true,
    placeholderData: initialData || undefined
  })

  useEffect(() => {
    if (data && data.length) {
      localStorage.setItem('categories', JSON.stringify(data))
    }
  }, [data])

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {isError}</p>

  return (
    <aside className='categories-container'>
      <h2 className='categories-container__heading'>Categories</h2>
      <ul className='categories-container__list'>
        <RenderCategories
          data={data || []}
          selectedCategories={selectedCategories}
          handleCategorySelection={handleCategorySelection}
        />
      </ul>
    </aside>
  )
}

export default Categories
