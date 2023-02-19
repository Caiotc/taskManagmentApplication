import { useState } from 'react'
import Header from './components/Header/Header'
import './Global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header/>
      <p>teste</p>
    </div>
  )
}

export default App
