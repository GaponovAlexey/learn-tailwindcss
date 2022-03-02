import Head from 'next/head'
import Main from '../components/Main'
import Select from '../components/Select'

export default function Home() {
  return (
    <>
      <Head>
        <title>tailwindcss</title>
        <link rel='icon' href='#!' />
      </Head>
      <main>
        {/* <Main /> */}
        <Select />
      </main>
    </>
  )
}
