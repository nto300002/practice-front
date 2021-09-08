import React, { useEffect,useState,useMemo,useCallback ,useReducer} from 'react';
import { render } from 'react-dom';

const initialState = {
  text: '',
  error: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'input':

    const error = action.payload.length === 0 ? 1 : action.payload.length > 15 ? 2 : 0
    return {
      text: action.payload,
      error
    };
  case 'reset':
    return initialState;
  }
}

export function CountOverflow(){
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = useCallback(e=>{
    dispatch({type:'input',payload:e.target.value})
  },[])

  const handleReset = useCallback(()=>{
    dispatch({type:'reset'})
  },[])
  return (
    <>
      <input type='text' value={state.text} onChange={handleChange} />
      <input type='button' value='reset' onClick={handleReset} />
      {state.error === 1 && <p>空欄です</p>}
      {state.error === 2 && <p>15文字以上です</p>}
    </>
  )
}

