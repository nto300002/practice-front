import React, { useEffect } from 'react';
import './App.scss';
import { useState } from 'react';
import {TodoItem} from './components/TodoItem';
import {AddTodoForm} from './components/AddTodoForm';
import {EditForm} from './components/EditForm';

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
  const [todo, setTodo] = useState('1');

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
        <EditForm 
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )
}


      <ul className='todo-list'>
      {/*1 */}
        {todos.map((todo) =>(
          <TodoItem 
            todo={todo}
            onHandleEditClick={handleEditClick}
            onHandleDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}



// *1 はTodosの配列をマップし、すべてのTodoに対して新しいli要素を作成します。
//         (li要素には、todo.idの値を使った "key "プロップを追加してください。)
//         これがオブジェクトの配列であることを覚えておいてください。
//         "text" にアクセスして、表示したい値を取得する必要があります。 


  // 参考: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
