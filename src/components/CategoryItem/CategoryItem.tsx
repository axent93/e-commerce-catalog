import React from 'react'
import './CategoryItem.css' // Import the CSS for styling

interface CategoryItemProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string // Optional label for the checkbox
}

const CategoryItem: React.FC<CategoryItemProps> = ({ checked, onChange, label }) => {
  const handleCheckboxChange = () => {
    onChange(!checked) // Toggle the checked state
  }

  return (
    <label className='category-item'>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className='category-item--mark' />
      {label && <span className='category-item__label'>{label}</span>}
    </label>
  )
}

export default CategoryItem
