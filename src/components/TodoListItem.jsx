import { useState } from "react";

function TodoListItem({ todo }) {
    const [ setTodoInput ] = useState('');

    const deleteHandler = (key) => {
        setTodoInput((prevTodos) => {
            return prevTodos.filter(todoItem => todoItem.key !== key );
        });
    }

    return (
        <li className="card">
            <h2 className="todo-card-heading">{todo.item}</h2>
            <button className=" edit btn">Edit</button>
            <button className="del btn" onClick={deleteHandler}>Delete</button>
        </li>
    );
}

export default TodoListItem;