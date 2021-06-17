function TodoListItem({ todoItem, deleteTodo, editTodo }) {

    return (
        <li className="card">
            <h2 className="todo-card-heading">
                <input 
                    type="text" 
                    id={todoItem.id}
                    value={todoItem.item}
                    onChange={(e) => {
                        editTodo(e.target.value, todoItem.id)
                    }} 
                />
            </h2>
            <div className="btn-box">
                <button className=" edit btn"onClick={editTodo}>Edit</button>
                <button className="del btn" onClick={deleteTodo}>Delete</button>
            </div>
        </li>
    );
}

export default TodoListItem; 