import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

export function EffectHook() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `クリック数: ${count} 回`
  },[count])
  return (
    <div>
      <p>クリック数 {count} 回</p>
      <p>名前：　{name}</p>
      <input 
      type='test'
      value={name}
      onChange={(e => setName(e.target.value))}
      />
      <button onClick={() => setCount(count +1)}>カウント　＋</button>
    </div>
  )
}


