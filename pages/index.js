import Head from 'next/head'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import Main from '../components/Main'
import { MyService } from '../components/service/servise'

export async function getStaticProps() {
  const res = await MyService.GetAll()
  const posts = res.data

  return {
    props: {
      data: posts,
    },
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>tailwindcss</title>
        <link rel='icon' href='#!' />
      </Head>
      <main>
        <Main />
      </main>
    </>
  )
}
