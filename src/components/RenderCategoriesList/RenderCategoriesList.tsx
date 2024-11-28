import { memo } from 'react'
import { ICategory } from '../../types/category.types'
import CategoryItem from '../CategoryItem/CategoryItem'

interface IRenderCategoriesProps {
  data: ICategory[]
  selectedCategories: string[]
  handleCategorySelection: (categoryName: string) => void
}

const RenderCategories = memo(
  ({ data, selectedCategories, handleCategorySelection }: IRenderCategoriesProps) =>
    data.map((category, index) => (
      <li
        className='categories-container__list--item'
        key={`${category}-category--${index}`}
      >
        <CategoryItem
          label={category}
          checked={selectedCategories.includes(category)}
          onChange={(): void => handleCategorySelection(category)}
        />
      </li>
    ))
)

RenderCategories.displayName = 'RenderCategories'

export default RenderCategories