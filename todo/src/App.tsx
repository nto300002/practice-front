import { waitForElementToBeRemoved } from '@testing-library/react';
import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';
import { getAllJSDocTagsOfKind } from 'typescript';

interface Todo {
  value: string;
  id: number;
  checked: boolean;
  removed: boolean;
}

type Filter = 'all' | 'checked' | 'unchecked' | 'removed';

const App:React.VFC =()=> {
  const [text, setText] = useState('');

  //タスクたち（todos 複数）は Todo 型オブジェクトの配列 とする。
  const [todos, setTodos] = useState<Todo[]>([]);

  const [filter, setFilter] = useState<Filter>('all');
  // 第 1 引数のコールバック関数
  // React コンポーネントのレンダー後（＝コンポーネントがマウント、アップデート、アンマウントされた後）に実行したい何らかの処理を指定する。
  
  // 第 2 引数の配列
  // 依存関係にあるステートを指定する。その特定のステートが更新されたときに第 1 引数の処理を実行したい場合に指定する。
  
  // 空配列とするとコンポーネントがマウントされたときのみに 1 回だけ、第 1 引数の処理が実行される。

  useEffect(() => {
    console.log(`コンポーネントがマウントされたよ！`);
  }, []);
  
  useEffect(() => {
    console.log(`filter ステートが更新されたよ！: ${filter}`);
  }, [filter]);
  
  useEffect(() => {
    document.title = `TODO: ${translatedFilter(filter)}`;
  }, [filter])

  const handleOnSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    e.preventDefault();

    if(!text) return;

    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false,
    }

    setTodos([newTodo, ...todos])
    setText('');
  }

  const handleOnEdit = (id: number, value: string) => {

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleOnCheck = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const handleOnRemove = (id: number, removed: boolean) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.removed = !removed; 
      }
      return todo;
    })
  }

  const filteredTodos = todos.filter((todo) => {
    switch (filter){
      case 'all':
        return !todo.removed;
      case 'checked':
        return todo.checked && !todo.removed;
      case 'unchecked':
        return !todo.checked && !todo.removed;
      case 'removed':
        return todo.removed;
      default:
        return todo;
    }
  });

  const translatedFilter = (arg: Filter) => {
    switch(arg){
      case 'all':
        return '全てのタスク';
      case 'checked':
        return '完了済のタスク';
      case 'removed':
        return 'ごみ箱';
      case 'unchecked':
        return '現在のタスク';
      default:
        return 'TODO';
    }
  }

  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  }

  const handleOnDragEnd=(result: any)=>{
    const items = Array.from(todos);
    const [reordererdItem] = items.splice(result.source.index,1);
    items.splice(result.detination.index, 0,reordererdItem);

    setTodos(items)
  }


  return (
    <div className="App">
      <select
        className='select'
        defaultValue='all'
        onChange={(e) => setFilter(e.target.value as Filter)}>
        <option value='all'>{translatedFilter('all')}</option>
        <option value='checked'>{translatedFilter('unchecked')}</option>
        <option value='unchecked'>{translatedFilter('checked')}</option>
        <option value='removed'>{translatedFilter('removed')}</option>
      </select>
      {filter === 'removed' ? (
        <button 
          onClick={() => handleOnEmpty()}
          disabled={todos.filter((todo) => todo.removed).length === 0}
        >
          ゴミ箱を空にする
        </button>
      ) : (
        <form onSubmit={(e) => handleOnSubmit(e)}>
        <input 
        type='text' 
        value={text} 
        disabled={filter === 'checked'}
        onChange={(e) => setText(e.target.value)}
         />
        <input 
        type='submit' 
        value='追加' 
        disabled={filter === 'checked'}
        onSubmit={(e) => handleOnSubmit(e)} />
      </form>
      )}

      
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='todo-list'>
        {(provided) => (
        <ul className='todo-list' {...provided.droppableProps} ref={provided.innerRef}>
          {todos.map(({id,value,checked,removed }, todo) => {
          return (
            <Draggable key={todo} draggableId={checked} index={todo}>
            
                          <li 
                          key={todo}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          >
                            <input
                            type='checkbox'
                            disabled={todo.removed}
                            checked={todo.checked}
                            onChange={() => handleOnCheck(todo.id, todo.checked)}
                            />
                            <input 
                            type='text'
                            disabled={todo.checked || todo.removed}
                            value={todo.value}
                            onChange={(e) => handleOnEdit(todo.id, e.target.value)}
                            />
                            <button 
                            onClick={() => handleOnRemove(todo.id, todo.removed)}>{todo.removed ? '復元' : '削除'}
                            </button>
                          </li>
            </Draggable>
            )}
            
            
            
          ) 
          
        })}   
          </ul>
        
        </Droppable>
      </DragDropContext>

      
    </div>
    
  );
}

export default App;
