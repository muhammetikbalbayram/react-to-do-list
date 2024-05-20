import TodoItem from "./TodoItem"
import PropTypes from 'prop-types'

const TodoList = ({todos, toggleStatus, removeTodo, editTodo}) => {
    return (
        <div className="todo-list-container">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleStatus={toggleStatus} removeTodo={removeTodo} editTodo={editTodo} />
            ))}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            status: PropTypes.bool.isRequired
        })
    ).isRequired,
    toggleStatus: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
}

export default TodoList
