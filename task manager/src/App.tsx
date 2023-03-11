import { useState } from 'react'
import Header from './components/Header/Header'
import WorkBench from './components/WorkBench/WorkBench'
import './Global.css'

import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper} >
      <Header/>
      <div className={styles.wrapper}>
        <WorkBench/>
      </div>
      
    </div>
  )
}

export default App
