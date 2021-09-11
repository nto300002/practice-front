export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange
}) {
  return (
    <form onSubmit={onAddFormSubmit}> 
    {/* 入力要素を作成します-必ず、渡された状態の値を持つvalue prop とonChangeプロップを追加してください。何かが入力されるたびに状態を更新するためのonChangeプロップを追加します。 */}
    <h2>Add Todo</h2>
    <label htmlFor='todo'>Create todo: </label>
      <input 
      name='todo'
      type='text'
      placeholder='Create a new todo'
      value={todo}
      onChange={onAddInputChange}
      /> 
      {/* ここでは、「追加」ボタン要素を追加しています - ボタンにtype="submit "を使用すると、クリックされたときにhandleFormSubmit関数を使ってフォームを送信します */}
      <button type='submit'>Add</button>
    </form>
  )
}
