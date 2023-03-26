import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import Heading from '../Heading'
import Loader from '../Loader'
import Button from '../button/Button'

import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
	isPagination?: boolean
}

const Catalog: FC<ICatalog> = ({
	products,
	isLoading,
	title,
	isPagination = false
}) => {
	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			{products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10 p-12'>
						{products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					{isPagination && (
						<Button variant='orange' size='sm'>
							Load more
						</Button>
					)}
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
