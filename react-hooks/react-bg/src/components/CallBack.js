import React, { useEffect,useState,useMemo } from 'react';

export const CallBack = () => {
  // コールバック関数
  const handleInput= useCallback((e) => {
    // イベント発生時に実行したい処理
    console.log(e.target.value)
  },[])
 
  return (
    <div>
      <input type="button" defaultValue=""　onClick={handleInput}/>
    </div>
  )
}
