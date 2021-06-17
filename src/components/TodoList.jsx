import { AppContext } from './StateProvider';
import { useContext, useState } from 'react';
import TodoListItem from './TodoListItem';


function TodoList() {
	const context = useContext(AppContext);
	console.log(context);

  const [list, setList] = useState();

  const deleteTodo = (id) => {
    const newList = list.filter((todoItem) => todoItem.id !== id);
    setList(newList);
  }

  const editTodo = (item, id) => {
    const newList = list.map((todoItem) => {
      if (todoItem.id === id) {
        const updatedItem = {
          ...todoItem.item = item,
        };
        return updatedItem;
      }
      return todoItem;
    });
    setList(newList);
  }
  
    return (
      <ul>
        {context.state.todoList.map((todoItem) => {
          return (
            <TodoListItem
              key={todoItem.id}
              todoItem={todoItem}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    );
}

export default TodoList;