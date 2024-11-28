import React from 'react'
import { IProduct } from '../../types/product.types'
import './ProductCard.css'

interface ProductCardComponent extends React.FC<IProduct> {
  Skeleton: React.FC
}

const ProductCard: ProductCardComponent = props => {
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
      <img
        className='product-card__image'
        width={400}
        height={400}
        src={images[0]}
        alt={`product-image-${productId}`}
      />

      <h3 className='product-card__name'>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

const Skeleton: React.FC = () => {
  return (
    <article className='product-card'>
      <svg
        className='skeleton'
        viewBox='0 0 400 400'
      />

      <h3 className='product-card__name skeleton'></h3>
      <p className='skeleton'></p>
    </article>
  )
}

ProductCard.Skeleton = Skeleton

export default ProductCard
