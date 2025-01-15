import { useState } from 'react'
import TodoMain from './TodoMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoMain />
    </>
  )
}

export default App
