import React , {useReducer} from 'react';
import Header  from './Header'
import Body   from './Body'
import Form   from './Form'

const initialState = {
  name: 'to-R Media'
}

function reducer(state, action){
  switch (action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      };
    default :
      return state
  }
}

export const SiteContext = React.createContext();

const SiteProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <SiteContext.Provider value={{state, dispatch}}>
    {children}
  </SiteContext.Provider>
}

export default function App() {
  return (
    <SiteProvider>
      <Header />
      <Body />
      <Form />
    </SiteProvider>
  );
}
