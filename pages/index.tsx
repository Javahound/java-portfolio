import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Main />
      </div>
    </>
  )
}

export default Home
