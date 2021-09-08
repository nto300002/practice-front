//useref
import React, { useEffect,useState,useMemo, useRef,useCallback } from 'react';

export function UseRef(){

  const inputEl = useRef(null)
  const [text,changeText] = useState('')
  const handleClick = useCallback(()=>{
    changeText(inputEl.current.value)
  },[])

  return (
    <>
      <p>text: {text}</p>
      <input ref={inputEl} type='text' />
      <button onClick={handleClick}>set text</button>
    </>
  )
}
//useState

function UseState(){
  const [tmpText,changeTmpText] = useState('')
  const [text,changeText] = useState('')

  const handleClick = useCallback(()=>{
    changeText(tmpText)
  },[tmpText])

  return (
    <>
      <p>text: {text}</p>
      <input 
        value={tmpText}
        onChange={e => changeTmpText(e.target.value)}
        type='text'
      />
      <button onClick={handleClick}>set text</button>
    </>
  )
}
