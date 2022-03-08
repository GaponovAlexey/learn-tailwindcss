import Head from 'next/head'
import { useQuery } from 'react-query'
import Main from '../components/Main'
import { MyService } from '../components/service/servise'

export async function getStaticProps() {
  const res = await MyService.GetAll()
  const posts = res.data
  return {
    props: { posts },
  }
}

export default function Home(props) {
  const { data } = useQuery('posts',  MyService.GetAll, { initialData: props.posts })
  console.log(data)
  return (
    <>
      <Head>
        <title>tailwindcss</title>
        <link rel='icon' href='#!' />
      </Head>
      <main>
        <Main />
        {/* <Select /> */}
        cmf
      </main>
    </>
  )
}
