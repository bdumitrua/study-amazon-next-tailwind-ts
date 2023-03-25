import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { TypeComponentAuthFields } from '@/providers/auth-provider/auth-page.types'

import '@/assets/styles/globals.scss'

import { persistor, store } from '@/store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({
	Component,
	pageProps
}: AppProps & TypeComponentAuthFields) {
	return (
		// TanStack (React) Query
		<QueryClientProvider client={queryClient}>
			{/* Redux */}
			<Provider store={store}>
				{/* Redux localstorage */}
				<PersistGate loading={null} persistor={persistor}>
					{/* Checking auth if nedeed */}
					<AuthProvider
						Component={{ isOnlyUser: Component.isOnlyUser }}
					>
						{/* Page */}
						<Component {...pageProps} />
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
