import { useState } from 'react'
import Navbar from './compoments/Navbar'
import Home from './compoments/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <p>Count: {count}</p>
    </>
  )
}

export default App
