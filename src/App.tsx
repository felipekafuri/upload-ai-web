import { useState } from 'react'
import { Button } from './components/ui/button'

export function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Button onClick={() => setCount(count + 1)}>test</Button></>
    )
}

