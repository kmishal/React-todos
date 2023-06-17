import { createContext } from 'react';
import { useState } from 'react';

export const appContext = createContext(null);

export default function AppContext({ children }) {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    return (
        <appContext.Provider value={{ todo, setTodo, todoList, setTodoList }}>
            {children}
        </appContext.Provider>
    );
}
