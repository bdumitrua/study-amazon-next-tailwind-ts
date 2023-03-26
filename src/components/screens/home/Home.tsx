import { FC } from 'react'

import Meta from '@/components/ui/Meta'
import Button from '@/components/ui/button/Button'
import CatalogPagination from '@/components/ui/catalog/CatalogPagination'
import Layout from '@/components/ui/layout/Layout'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypePaginationProducts } from '@/types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<Meta title='Home'>
			<Layout>
				{!!user && (
					<Button variant='orange' onClick={() => logout()} size='md'>
						Logout
					</Button>
				)}
				<CatalogPagination
					data={{ products, length }}
					title='Home catalog'
				/>
			</Layout>
		</Meta>
	)
}

export default Home
