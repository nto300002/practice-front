export default function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
    <h2>Edit Todo</h2>
    <label htmlFor='editTodo'>Edit todo:</label>
    {/* 更新入力の値が currentTodo の状態に設定されていることに注意してください
    {/* handleEditInputChangeが使用されていることにも注目してください */}

    <input 
      name='editTodo'
      type='text'
      placeholder='Edit todo'
      value={currentTodo.text}
      onChange={onEditInputChange}
    />
    {/* ここでは、"update "ボタン要素を追加しています - ボタンにtype="submit "を使用すると、handleEditFormSubmit関数を使用して、クリックされたときにフォームが送信されます */}
    <button type='submit' onClick={onEditFormSubmit}>Update</button>
    <button onClick={() => setIsEditing(false)}>Cancel</button>
    {/* ここでは、"キャンセル "ボタンを追加して、isEditingステートをfalseに戻し、編集モードを解除しています */}
  </form>
  )
}
