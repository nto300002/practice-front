import React, {useState} from 'react';

 export function FormHook() {
  const [name, setName] = useState({ firstName: '', lastName: '' })

  return(
    <div>
      <div>
        <p>First Name: - {name.firstName}</p>
        <p>Last Name: - {name.lastName}</p>
      </div>
      <form>
        <input 
        type='text'
        value={name.firstName}
        //スプレット構文で名前を置換する
        onChange={e => setName({ ...name,firstName :e.target.value })}
        />
        <input 
        type='text'
        value={name.lastName}
        onChange={e => setName({ ...name,lastName :e.target.value })}
        />

      </form>
    </div>
  )
}
