import '../styles/globals.css'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import { store } from '../components/redux'

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  )
}
