import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className='mb-2 flex justify-between'>
			{!!product.reviews.length && (
				<span className='mr-1 inline-flex items-center'>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: 'inline-block'
						}}
						size={24}
						allowFraction
						transition
					/>
					<span
						style={{ color: '#FFBC0D' }}
						className='pt-0.5 ml-1 text-sm'
					>
						{rating}
					</span>
				</span>
			)}
			<span className='pt-0.5 text-sm'>
				({product.reviews.length} reviews)
			</span>
		</div>
	)
}

export default ProductRating
