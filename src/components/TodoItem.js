import PropTypes from 'prop-types'

const TodoItem = ({ todo, toggleStatus, removeTodo, editTodo }) => {
    return (
        <div className="todo-item">
            <span className={todo.status === true ? 'todo-text-done' : 'todo-text'} >{todo.text}</span>
            <div className="button-container">
                <button onClick={() => editTodo(todo.id)} className="edit-button">Edit</button>
                <button onClick={() => toggleStatus(todo.id)} className={todo.status === true ? 'finished-button' : 'todo-button'}>{todo.status === true ? "Done" : "Todo"}</button>
                <button onClick={() => removeTodo(todo.id)} className="remove-button">Remove</button>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired
    }).isRequired,
    toggleStatus: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
}

export default TodoItem