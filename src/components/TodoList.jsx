import { AppContext } from './StateProvider';
import { useContext } from 'react';
import TodoListItem from './TodoListItem';


function TodoList() {
	const context = useContext(AppContext);
	console.log(context);

    return (
      <ul>
        {context.state.todoList.map(function (todoItem) {
          return (
            <TodoListItem
              key={todoItem.id}
              todo={todoItem}
            />
          );
        })}
      </ul>
    );
}

export default TodoList;