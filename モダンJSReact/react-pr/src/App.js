
import React,{useEffect, useState} from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  console.log('saisyo')
  const [ num, setNum ] = useState(0);
  const [ faceShowFlag, setFaceShowFlag ] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };


  useEffect(()=> {
    if(num > 0) {
      if (num % 3 === 0){
        faceShowFlag || setFaceShowFlag(true);
      }else{
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num])



  return (
    <>
      <h1 style={{ color: 'red' }}>ii</h1>
      <ColorfulMessage color='blue'>dsa</ColorfulMessage>
      <ColorfulMessage color='pink' message='hiya'/>
      <button onClick={onClickCountUp}>countUp</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      { faceShowFlag && <p>(*^^*)</p> }
      
    </>
  );
};

export default App;
