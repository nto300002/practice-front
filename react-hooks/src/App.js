import React, {createContext, useState, useReducer} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import CounterHooks from './components/CounterHooks';
import {FormHook} from './components/FormHooks';
import {ItemHook} from './components/ItemHook';
import {EffectHook} from './components/EffectHook';
import {MouseEventEffect} from './components/MouthEventEffect';
import {DataFetch} from './components/DataFeatch';
import {DataFetchById} from './components/DataFetchById';
import { CounterReducer } from './components/CounterReducer';
// import {ComponentA} from './components/ComponentA';
// import {ComponentB} from './components/ComponentB';
// import {ComponentC} from './components/ComponentC';

// import { createContext, useState } from 'react';
// import { ComponentC } from './components/ComponentC';
// import { ComponentF } from './components/ComponentF';

// export const UserContext = createContext();
// export const LanguageContext = createContext()
export const CountContext = createContext()
  const initialState = {
    firstCounter: 0,
  }

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment1':
      return { ...state, firstCounter: state.firstCounter + action.value}
    case 'decrement1':
      return { ...state, firstCounter: state.firstCounter - action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  // const [user, setUser] = useState({name: 'yamada', age: '32'})
  // const [language, setLanguage] = useState('日本語')
  return (
    <div className="App">
      {/* <Counter />
      <CounterHooks />
      <FormHook /> */}
      {/* <ItemHook /> */}
      {/* <EffectHook />
      <MouseEventEffect /> */}
      {/* <DataFetch /> */}
      {/* <DataFetchById /> */}
      {/* <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterReducer /> */}


    </div>
  );
}

export default App;
