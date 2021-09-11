import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

export default function App() {
  //todoの状態
  const [todos, setTodos] = useState(()=> {
      // 初期状態として空の配列を使用する代わりに、関数を使用することができます。
    const savedTodos = localStorage.getItem('todos');

    if(savedTodos){
      //解析されたJSONオブジェクトをjavascriptオブジェクトに戻す
      return JSON.parse(savedTodos);
    }else{
      return []
    }
  });
  //入力された値を追跡するための状態が必要です。
  const [todo, setTodo] = useState('');

  //編集中であるかどうかを知るためのブーリアン状態（条件に応じて異なる入力を表示することができる 
  const [isEditing, setIsEditing] = useState(false);
  // どのTodoアイテムを編集しているかを知るために設定するオブジェクトの状態
  const [currentTodo, setCurrentTodo] =useState({});

  useEffect(() => {
     // 文字列に変換せずに配列やオブジェクトを保存することはできません。JSON.stringify は、オブジェクトを JSON 文字列に変換します。
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  function handleInputChange(e){  //関数を使用して、入力の値を取得し、新しい状態を設定
    setTodo(e.target.value) //新しい状態の値を現在の入力ボックスの値に設定する
  }

  function handleFormSubmit(e){ //フォーム送信時に新しいオブジェクトを作成する関数
    e.preventDefault(); //送信時にページが更新されるというブラウザのデフォルトの動作を防ぐ

    if(todo !== ''){ //入力が空の文字列の場合は送信しない
      setTodos([ //新しいTODOSの状態（配列）を設定する
        ...todos, //状態の現在の値をコピーします。
        {
          id: todos.length +1, //オブジェクトを識別するための基本的なIDの設定
          //テキストプロパティにTodo状態の値を設定して 入力からのホワイトスペースのトリム
          text: todo.trim()
        }
      ]);
    }
    setTodo(''); //入力ボックスの消去
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      // 削除するアイテムにマッチしない残りのTODOを返す
      return todo.id !== id;
    });
    setTodos(removeItem)
  }

  function handleEditInputChange(e){
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleEditClick(todo){
    setIsEditing(true);// 編集を真にする
    setCurrentTodo({ ...todo }); //クリックされたTodoアイテムにcurrentTodoを設定する
  }

  function handleUpdateTodo(id, updatedTodo){
    // ここではTODOの配列をマッピングしています - TODO.IDが関数に渡したIDと一致するかどうかをチェックします  
    //idが一致した場合、2番目のパラメータを使って更新されたTodoオブジェクトを渡す
    // そうでなければ、古いTodoを使う
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    // この関数はonSubmit関数内で使用されるため、Editingをfalseに設定します - これはデータが送信されたことを意味し、もはや編集は行われません
    setIsEditing(false);
    // 更新されたTodoでTodosステートを更新する
    setTodos(updatedItem);
  }

  function handleEditFormSubmit(e){
    e.preventDefault();

    // handleUpdateTodo関数を呼び出す - currentTodo.idとcurrentTodoオブジェクトを引数として渡す
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  return (
    <div className='App'>

      {isEditing ? ( // 編集中であれば、Todo編集用の入力を表示する
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit Todo</h2>
          <label htmlFor='editTodo'>Edit todo:</label>
          {/* 更新入力の値が currentTodo の状態に設定されていることに注意してください
          {/* handleEditInputChangeが使用されていることにも注目してください */}

          <input 
            name='editTodo'
            type='text'
            placeholder='Edit todo'
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          {/* ここでは、"update "ボタン要素を追加しています - ボタンにtype="submit "を使用すると、handleEditFormSubmit関数を使用して、クリックされたときにフォームが送信されます */}
          <button type='submit'>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
          {/* ここでは、"キャンセル "ボタンを追加して、isEditingステートをfalseに戻し、編集モードを解除しています */}
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}> 
        {/* 入力要素を作成します-必ず、渡された状態の値を持つvalue prop とonChangeプロップを追加してください。何かが入力されるたびに状態を更新するためのonChangeプロップを追加します。 */}
        <h2>Add Todo</h2>
        <label htmlFor='todo'>Add todo: </label>
          <input 
          name='todo'
          type='text'
          placeholder='Create a new todo'
          value={todo}
          onChange={handleInputChange}
          /> 
          {/* ここでは、「追加」ボタン要素を追加しています - ボタンにtype="submit "を使用すると、クリックされたときにhandleFormSubmit関数を使ってフォームを送信します */}
          <button type='submit'>Add</button>
        </form>
      )
}


      <ul className='todo-list'>
      {/*1 */}
        {todos.map((todo) =>(
          <li key={todo.id}>
            {/*2 */}
            {todo.text}
            <button onClick={() => handleEditClick(todo)}>Edit</button>
            <button onClick={() => handleDeleteClick(todo.id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}



// *1 はTodosの配列をマップし、すべてのTodoに対して新しいli要素を作成します。
//         (li要素には、todo.idの値を使った "key "プロップを追加してください。)
//         これがオブジェクトの配列であることを覚えておいてください。
//         "text" にアクセスして、表示したい値を取得する必要があります。 

// *2 上記で作成した関数をonClickハンドラとして追加します。
//           handleDeletClick関数は、削除したいアイテムを知る必要があることを覚えておいてください。
  // 参考: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
