function TodoListItem({ todo }) {

    return (
        <li className="card">
            <h2 className="todo-card-heading">{todo.item}</h2>
            <button className=" edit btn">Edit</button>
            <button className="del btn">Delete</button>
        </li>
    );
}

export default TodoListItem; 