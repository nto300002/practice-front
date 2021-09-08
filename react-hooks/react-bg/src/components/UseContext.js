import React, { useEffect,useState,useMemo,useCallback ,useReducer,useContext} from 'react';

export const SiteContext = React.createContext();

export function UseContext() {
  return (
    <>
      <SiteContext.Provider value={{name: 'to-R Media'}}>
        <Header />
        <Body />
      </SiteContext.Provider>
    </>
  )
}

