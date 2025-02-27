import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todos:"todo msg",
            completed:false
        }
    ],
    addTodo:(Todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () =>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider