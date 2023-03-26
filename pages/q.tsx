import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Meta from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'

import { ProductService } from '@/services/product/product.service'

const SearchPage: NextPage = () => {
	const { query } = useRouter()

	const { data } = useQuery(['search products', query.term], () =>
		ProductService.getAll({
			searchTerm: query.term as string
		})
	)

	return (
		<Meta title='Поиск'>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Searchig for "${query.term || ''}"`}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
