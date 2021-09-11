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
      <button className='likeButton' onClick={onClick}>{like.liked ? '😍' : 'いいねする'}</button>{like.count}
    </li>
  );
}

// *2 上記で作成した関数をonClickハンドラとして追加します。
//           handleDeletClick関数は、削除したいアイテムを知る必要があることを覚えておいてください。
