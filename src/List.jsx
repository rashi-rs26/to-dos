import React from 'react'
import ListItem from './ListItem'


const List = ({todos, setTodosList}) => {
  console.log(todos);

  return (
    <div>
         {todos.map(todo => <ListItem key={todo.id} todos={todos} todoItem={todo} setTodosList={setTodosList}/>)}
    </div>
  )
}

export default List