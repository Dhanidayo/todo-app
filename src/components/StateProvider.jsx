import { createContext, useReducer } from 'react';

export const AppContext = createContext();

//reducer function
function reducer(state, action) {
    //create a copy of your state
    let stateCopy = {...state};

    //set the name on stateCopy to action
    stateCopy.action = action;

    //if a user clicks on ADD TODO, the todo item should be added to the todoList array
    if (action.type === 'ADD_TODO') {
        stateCopy.todoList.unshift(action.payload);
    }
    //if a user is logged in, set login to true and userData to payload
    if (action.type === 'LOGIN') {
        stateCopy.isLoggedIn =  true;
        stateCopy.userData = action.payload;
    }
    //if a user is logged out, set isLoggedin to false and userData to null
    if (action.type === 'LOGOUT') {
        stateCopy.isLoggedIn = true;
        stateCopy.userData = null;
    }
    return stateCopy;
}

const initialState = {
    todoList: [],
    isLoggedIn: false,
    userData: null,
};

function StateProvider({ children }) { 

    const [state, dispatch] = useReducer(reducer, initialState); //the useReducer takes in a reducer function and an initialState. The initialState is an object

    const contextObject = {
        state,
        dispatch,
    };

    return(
        <AppContext.Provider value={contextObject}>
            { children }
        </AppContext.Provider>
    );
}

export default StateProvider;

//reducer function - this is the fuction used to set state in useReducer
//the reducer function always takes in state and action
//the dispatch when called calls the reducer function which has the state and action