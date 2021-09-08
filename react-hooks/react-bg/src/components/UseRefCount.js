import React, { useEffect,useState,useMemo,useCallback, useRef } from 'react';

export function UseRefCount () {
  const count = useRef(0);

  const addCount = useCallback(()=>{
    count.current += 1
  },[])

  const showLog = useCallback(()=>{
    console.log(count.current)
  },[])
  return (
    <>
      <button onClick={addCount}>add count</button>
      <button onClick={showLog}>show log</button>
    </>
  )
}

// useState
export function UseStateCount() {
  const[count, changeCount] = useState(0);

  const addCount = useCallback(()=>{
    changeCount(prevCount => prevCount+1)
  },[])
  const showLog = useCallback(()=>{
    console.log(count)
  },[count])

  return (
    <>
      <button onClick={addCount}>add count</button>
      <button onClick={showLog}>show log</button>
    </>
  )
}
