import { FC } from 'react'

import Heading from '@/components/ui/Heading'
import Meta from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'

import { TypePaginationProducts } from '@/types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Heading>Home</Heading>
			{/* Carousel */}

			<Catalog products={products || []} />
		</Meta>
	)
}

export default Home
