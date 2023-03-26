import Meta from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { useProfile } from '@/hooks/useProfile'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog
					products={profile?.favorites || []}
					title='Favorites'
				/>
			</Layout>
		</Meta>
	)
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage
