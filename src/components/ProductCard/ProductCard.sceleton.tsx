import { IProduct } from '../../types/product.types'
import './ProductCard.css'

export default function ProductCard(props: IProduct) {
  const {
    name,
    productId,
    images,
    price,
    description,
    category,
    rating,
    currency,
    brand,
    reviewsCount,
    availability,
    tags
  } = props

  return (
    <article className='product-card'>
      <svg
        className='skeleton'
        viewBox='0 0 400 400'
      />

      <h3 className='product-card__name'>{name}</h3>
      <p>{description}</p>
    </article>
  )
}
