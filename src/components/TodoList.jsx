import { AppContext } from './StateProvider';
import { useContext, useState } from 'react';
import TodoListItem from './TodoListItem';


function TodoList(props) {
	const context = useContext(AppContext);
	console.log(context);

  const [ setTodoInput ] = useState();

  const deleteTodo = (key) => {
    setTodoInput((prevTodos) => {
        return prevTodos.filter(todoItem => todoItem.key !== key );
    });
}

    return (
      <ul>
        {context.state.todoList.map(function (todoItem) {
          return (
            <TodoListItem
              key={todoItem.id}
              todo={todoItem}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
}

export default TodoList;