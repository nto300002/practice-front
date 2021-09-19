import React from 'react';

export default function FilterQuery({
  onAddhandleFilter,

}){
  return(
    <>
    <input
    type="text"
    name="title"
    className="form-input"
    placeholder="ここで検索"
    onChange={onAddhandleFilter}
  />[検索]
  </>
  )

}
