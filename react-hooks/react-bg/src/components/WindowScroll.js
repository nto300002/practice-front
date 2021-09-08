import React, { useEffect,useState } from 'react';

export const WindowScroll = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)



  
  useEffect((()=> {
    const handleScroll = () =>{
      console.log(window.scrollY)

    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[]))
  return (
    <>
    <div>
      <ul>
        <li>x座標：{x}</li>
        <li>y座標：{y}</li>
      </ul>
    </div>
    

    </>
  )
}
