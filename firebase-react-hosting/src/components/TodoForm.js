import React, { useContext, useState } from 'react'
import { Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { TodosContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const { addTodo } = useContext(TodosContext)
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }
  return (
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input type="text"
              value={value}
              onChange={e => setValue(e.target.value)} />
            <InputGroupAddon addonType="append">
              <Button type="submit" color="primary">add</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
  )
}

export default TodoForm
