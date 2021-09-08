import React, {useState, useEffect} from 'react'
import { render } from 'react-dom';

export function MouseEventEffect () {
  console.log('M')
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const getMousePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('mousemove', getMousePosition)
    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }
  }, [])
  return (
    <div>
      <ul>
        <li>x座標：{x}</li>
        <li>y座標：{y}</li>
      </ul>
    </div>
  )
}
