function TodoListItem({ todoItem, deleteTodo, editTodo }) {

    return (
        <li className="card">
            <h2 className="todo-card-heading">{todoItem.item}</h2>
            <button className=" edit btn"onClick={editTodo}>Edit</button>
            <button className="del btn" onClick={deleteTodo}>Delete</button>
        </li>
    );
}

export default TodoListItem; 