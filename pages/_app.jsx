import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { handlePageView } from '@helpers/gtm'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import NowPlayingSection from '@components/now-playing-section'
import Anchor from '@components/anchor'
import HeroSection from '@components/hero-section'

import 'styles/tailwind.css'

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
