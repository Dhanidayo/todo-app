import { useState, useContext } from 'react';
import { AppContext } from './StateProvider';

function AddTodoForm() {
    const [todoInput, setTodoInput] = useState('');
    const context = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todoInput) {
            return false;
        }

        const newTodo = {
            item: todoInput,
            id: Date.now(), 
            isComplete : false
        };

        context.dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })
        //reset the value of the input box
        setTodoInput('');
    }

    return (
        <div className="form-container">
            <h1 className="main-heading">My Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={todoInput}
                    onChange={e => setTodoInput(e.target.value)} 
                    name="todoInput" 
                    id="myForm" 
                    placeholder="Write your plans here..."
                />
                <button type="submit" className="add-btn">Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodoForm;