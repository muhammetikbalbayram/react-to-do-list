import './App.css';
import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {


  const [todo, setTodo] = useState('')
  const [currentEditId, setCurrentEditId] = useState(null)

  //This function helps to retrieve data from local storage
  const retrieveStoredTodoList = () => {
    const storedTodoList = JSON.parse(localStorage.getItem('storedTodoList'))
    if (storedTodoList) {
      return storedTodoList
    }
    return []
  }

  const [todoList, setTodoList] = useState(() => retrieveStoredTodoList())

  //Whenever todoList state get changed , this useEffect hook updates localstorage data
  useEffect(() => {
    localStorage.setItem('storedTodoList', JSON.stringify(todoList));
  }, [todoList])

  //This fuction helps to add todo or edit existing todo
  const addOrEditTodo = () => {
    if (!todo.trim()) return

    if (currentEditId !== null) {
      setTodoList(todoList.map((item) =>
        item.id === currentEditId ? { ...item, text: todo } : item
      ))
      setCurrentEditId(null)
    } else {
      setTodoList([...todoList, { id: Date.now(), text: todo, status: false }])
    }
    setTodo('')
  }

  //This fuction helps to change boolean value of status
  const toggleStatus = (id) => {
    setTodoList(todoList.map(todo =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    ))
  }

  //This fuction helps to delete existing todo
  const removeTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  //This fuction helps to change the value of todo text
  const editTodo = (id) => {
    const todoToEdit = todoList.find(todo => todo.id === id)
    if (todoToEdit) {
      setTodo(todoToEdit.text)
      setCurrentEditId(id)
    }
  }

  return (
    <div className="App">
      <h1 className='todo-title'>Todo List</h1>
      <div className='input-container'>
        <input
          type="text"
          value={todo}
          className="todo-input"
          placeholder='Add new task'
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addOrEditTodo} className="add-button">{currentEditId ? 'Save' : 'Add'}</button>
      </div>
      <TodoList todos={todoList} toggleStatus={toggleStatus} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;


