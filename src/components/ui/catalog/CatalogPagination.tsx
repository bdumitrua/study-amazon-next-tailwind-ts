import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import Heading from '../Heading'
import Loader from '../Loader'
import Button from '../button/button'

import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'

interface ICatalogPagination {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({
	products,
	isLoading,
	title
}) => {
	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown />
			{products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10 p-12'>
						{products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-16'>
						<Button variant='orange'>Load more</Button>
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
