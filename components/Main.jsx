import { useState } from 'react'
import styles from '../styles/main.module.scss'

const Main = () => {
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)
  const [isOpen, setisOpen] = useState(false)

  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>hello</h1>
      <div>
        <input
          type='text'
          placeholder='email'
          value={email ? email : ''}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type='text'
          placeholder='password'
          value={password ? password : ''}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button onClick={() => setisOpen(!isOpen)} className={styles.button}>
          you
        </button>
      </div>

      {isOpen && <button className='animate-fade'>TEST</button>}
    </div>
  )
}

export default Main
