import styles from '../styles/main.module.scss'

const Main = () => {
  return (
    <div className={styles.parent}>
      <h1 className='text-4xl text-center text-gray-400 font-bold '>hello</h1>
      <button className='mt-10 bg-red-300 rounded-xl bg-opacity-60 block mx-auto py-2 px-14 hover:bg-opacity-100 transition delay-20 hover:animate-bounce md:bg-green-500  '>
        <div>you</div>
      </button>
    </div>
  )
}

export default Main
