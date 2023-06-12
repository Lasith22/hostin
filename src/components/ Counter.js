import React, { useState } from 'react'

const Counter = () => {
  const initalCount = 0
  const[count,setCount] = useState(initalCount)

  const method=()=>{
    setCount(count+1)
  }
  const decrement = () =>{
    setCount(count-1)
  }
  const reset = ()=>{
    setCount(initalCount)
  }

  return (
    <div>

      <h1>{count}</h1>
        <button onClick={method}>  incement</button>
        <button onClick={decrement}> dec</button>
        <button onClick={reset}> reset</button>
    </div>
  )
}

export default Counter