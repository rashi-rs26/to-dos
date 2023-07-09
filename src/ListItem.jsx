import React from 'react'
import {BsTrash3} from 'react-icons/bs'

const ListItem = ({todoItem, todos, setTodosList}) => {

    const handleDone = () => {
        console.log('yoo')
            const flipped = !todoItem.isDone;
            const newTodo = {...todoItem, isDone : flipped};
            
            const newTodos = todos.map(todo => {
                if(todo.id == todoItem.id) {
                    console.log("okayyy")
                    todo = newTodo
                } return todo;
            })
            setTodosList(newTodos);

    }

    const handleDelete = () => {
        console.log("deleteddd")
        const newTodos = todos.filter(item => item.id != todoItem.id);
        setTodosList(newTodos);
        
    }

  return (
    <div className='each-note-container'>
    {todoItem.isDone && <div className='each-todo'>{todoItem.detail}</div>}
    {!todoItem.isDone && <div className='each-todo-done'>{todoItem.detail}</div>}
    {todoItem.isDone && <button className='done-button' onClick={handleDone}> Done</button>}
    {!todoItem.isDone && <button className='done-button' onClick={handleDone}> Undo</button>}
    <BsTrash3 className='done-button' onClick={handleDelete}> </BsTrash3>
    </div>
   
  )
}

export default ListItem


