import React,{useState}from 'react'

export default function TodoItem({
  todo,
  onEditClick,
  onDeleteClick,
  goodButton
}) 
{  
  const [like, setLike] = useState({ count: 0, liked: false })
  const onClick = () => {
    setLike({
      count: like.count + (like.liked ? -1: 1),
      liked: !like.liked
    });
  }
  return (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => onEditClick(todo)}>Edit</button>
      <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
      <button className='likeButton' onClick={onClick}>{like.liked ? 'π' : 'γγγ­γγ'}</button>{like.count}
    </li>
  );
}

// *2 δΈθ¨γ§δ½ζγγι’ζ°γonClickγγ³γγ©γ¨γγ¦θΏ½ε γγΎγγ
//           handleDeletClickι’ζ°γ―γει€γγγγ’γ€γγ γη₯γεΏθ¦γγγγγ¨γθ¦γγ¦γγγ¦γγ γγγ
