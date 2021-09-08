import React, { useState } from 'react';

export const Foo = () => {
  const [count, changeCount] = useState(0)
  const [name, changeName] = useState('')
  return (
    <>
    <p>c: {count}</p>
    <p>n: {name}</p>
    <input
      type='button'
      value='increment'
      onClick={() => changeCount(prevCount => prevCount+1)}
    />
    <input
      type='test'
      value={name}
      onChange={(e => changeName(e.target.value))}
    />
    </>
  )
}
