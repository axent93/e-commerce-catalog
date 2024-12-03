import StarIcon from '../icons/StarIcon'
import './ProductRating.css'

type TRatingProps = {
  value: number
}

const ProductRating: React.FC<TRatingProps> = props => {
  const { value } = props

  const stars = [0, 1, 2, 3, 4, 5]

  return (
    <div className='product-rating__container'>
      {stars.map((star, index) => (
        <StarIcon
          key={star}
          className={`product-rating__container--star ${index < value ? 'filled' : ''}`}
        />
      ))}
    </div>
  )
}

export default ProductRating
