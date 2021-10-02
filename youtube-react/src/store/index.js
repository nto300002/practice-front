import React,{ createContext, useReducer } from 'react'


const initialState = {
  popular: [],
  related: [],
  selected: {}
}

//2つの値を取り1つの値に返す
const reducer = (state, action) => {
  switch(action.type){
    case "SET_POPULAR":
      return { ...state, popular: action.payload.popular }
    case "SET_RELATED":
      return { ...state, related: action.payload.related }    
    case "SET_SELECTED":
      return {...state, selected: action.payload.selected}
    default:
      return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})

const StoreProvider = ({children}) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    <div>
      <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
    </div>
  )
}

export default StoreProvider
