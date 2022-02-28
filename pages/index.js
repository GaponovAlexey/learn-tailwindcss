import Head from 'next/head'
import Main from '../components/Main'

export default function Home() {
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
