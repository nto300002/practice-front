import React, { useEffect,useState } from 'react';

export const ChangeCount = () => {
  const [count, changeCount] = useState(0)
  
  useEffect(() =>{
    const timer = setInterval(()=>{
      console.log(count)
    },1000)
    return () => {
      clearInterval(timer)
    }
  },[count])
  return (
    <>
      <p>c:: {count}</p>
      <input 
        type='button' value='10' onClick={() => changeCount(10)}
    />

    </>
  )
}
