import React, { useState } from 'react'
import Body from './components/Body'



function App() {
  const[Count, setCount]=useState(0)
  return (
    <div>
      <Body/>
    </div>
  )
}

export default App
