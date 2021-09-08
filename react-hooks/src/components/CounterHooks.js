import React, {useState} from 'react';

function CounterHook() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    // 関数を使用
    setCount(prevCount => prevCount +1)
  }

  const incrementCountTen = () => {
    for(let i =0; i < 10; i++){
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>カウント　＋</button>
      <button onClick={incrementCountTen}>カウント　＋</button>
    </div>
  )
}

export default CounterHook
