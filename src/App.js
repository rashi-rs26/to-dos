
import { useState, useEffect } from 'react';
import List from './List'
import todos from './items';


function App() {

  

  const [todosList, setTodosList] = useState(JSON.parse(localStorage.getItem('todosList')) || [])
  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(todosList))
  }, [todosList]) 

  const [newTodo, setNewTodo] = useState('')

  const handleAddNewTodo = (e) => {
    e.preventDefault();
    const id = todosList.length + 1;
    const newTodoObj = {id, detail: newTodo, isDone: true}
    console.log(newTodoObj);
    setTodosList(prevTodos => [...prevTodos, newTodoObj])
    setNewTodo("")
  }
 
  return (
    <div className='outer-container'>
      <header className="app-header">
        <p>
          Let's get this day Started!
        </p>
      </header>
      <div className='container-body'>
      <div className='add-form'> 
      <button className='button-74' onClick={handleAddNewTodo}>Add</button>
      <form >
        <input className='input-form' type='text' placeholder='add new here...' value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}}>
        </input>
      </form>
      </div> 
      <List todos={todosList} setTodosList={setTodosList} />
      </div>
    </div>
  )
}

export default App;
