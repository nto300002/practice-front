import React, { useContext } from 'react'
import { Button,  Table } from "reactstrap";
import { TodosContext } from '../contexts/TodoContext';


const TodoList = () => {
  const { todos, completeTodo, removeTodo } = useContext(TodosContext)
  return (
    <Table>
    <tbody>
      {todos && todos.map((todo, index) => (
      <tr key={index}>
        <th className="text-left" style={{ textDecoration: todo.complete ? "line-through" : "" }}>
          {todo.text}
        </th>
        <td className="text-right">
          <Button
            color={todo.complete ? "secondary" : "success"}
            className="mr-2"
            onClick={() =>completeTodo(index)}>
              {todo.complete ? "done" : "not done"}
          </Button>
          <Button color="danger"onClick={() => removeTodo(index)} >delete</Button>
        </td>
      </tr>
      ))}
    </tbody>
  </Table>
  )
}

export default TodoList
