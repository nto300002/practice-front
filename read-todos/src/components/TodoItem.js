export default function TodoItem({
  todo,
  onEditClick,
  onDeleteClick
}) {
  return(
    <li key={todo.id}>
    {/*2 */}
    {todo.text}
    <button onClick={() => handleEditClick(todo)}>Edit</button>
    <button onClick={() => handleDeleteClick(todo.id)}>Delete</button></li>
  )
}

// *2 上記で作成した関数をonClickハンドラとして追加します。
//           handleDeletClick関数は、削除したいアイテムを知る必要があることを覚えておいてください。
