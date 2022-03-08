import { useState } from 'react'
import styles from '../styles/main.module.scss'

const Main = ({data}) => {
  console.log(data);
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)

  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>Todo</h1>
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
          ADD
        </button>
      </div>
    </div>
  )
}

export default Main
