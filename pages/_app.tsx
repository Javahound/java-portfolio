import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <Script src="/dist/notiflix-3.2.5.min.js"></Script> */}
    </Layout>
  )
}

export default MyApp
