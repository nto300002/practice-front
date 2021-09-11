import React,{useState, useEffect, useReducer} from 'react';
import './styles.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/InconpleteTodos';
import { CompleteTodos } from './components/CompleteTodos';



export const App = () => {
  // const appState = localStorage.getItem('appWithRedux')
  // const initalState = appState ? JSON.parse(appState) : {
  //   events: [],
  //   operationLogs:[]
  // }
  // const [state, dispatch] = useReducer(reducer, initalState)
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] =useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // useEffect(() => {
  //   localStorage.setItem('appWithRedux',JSON.stringify(state))
  // },[state])

  const onClickAdd = () => {
    if(todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  } ;

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
  <>
    <InputTodo 
    todoText={todoText} 
    onChange={onChangeTodoText} 
    onClick={onClickAdd}
    disabled={incompleteTodos.length >= 5 }
    />
    {incompleteTodos.length >= 5 && 
    <p　style={{ color: 'red'}}>登録できるTODOは5個までです</p>}

    <IncompleteTodos 
    todos={incompleteTodos}
    onClickComplete={onClickComplete}
    onClickDelete={onClickDelete}
    />
    <CompleteTodos 
    todos={completeTodos}
    onClickBack={onClickBack}
    />

  </>
  );
}
