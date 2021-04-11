import { useEffect } from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router, { useRouter } from 'next/router'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

import Anchor from '@components/anchor'
import { handlePageView } from '@helpers/gtm'
import HeroSection from '@components/hero-section'
import NowPlayingSection from '@components/now-playing-section'

import 'styles/tailwind.css'
import 'nprogress/nprogress.css'

const queryClient = new QueryClient()
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      handlePageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Liam Muller</title>
      </Head>
      <main className="relative pb-16">
        <Anchor id="main" />
        <HeroSection />
        <Component {...pageProps} />
      </main>
      <NowPlayingSection />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
