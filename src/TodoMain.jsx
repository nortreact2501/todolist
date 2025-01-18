import './TodoMain.css';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { useState } from 'react';

//TodoList - komponent ülesannete näitamiseks
//       - TodoElement 
//AddTodo - komponent ülesande lisamiseks
//  - ???

function TodoMain() {
    const [todos, setTodos] = useState([
        {
            description: 'Jaluta koera',
            priority: 3,
            isDone: false
        },
        {
            description: 'Valmista hommikusöök',
            priority: 2,
            isDone: true
        },
        {
            description: 'Mine tööle',
            priority: 2,
            isDone: false
        },
        {
            description: 'Hommikujooga',
            priority: 1,
            isDone: false
        },
    ])

    const addNewTodo = ({description, priority}) => {
        setTodos(prevTodos => {
            return [...prevTodos, {description, priority, isDone: false}]
        })       
    }

    const toggleDone = (todoIndex) => {
        console.log('klikiti rida number ' + todoIndex)
        setTodos( prevTodos =>  prevTodos.map( (todo, index) => {
            if (todoIndex != index) {
                return todo;
            }
            return {...todo, isDone: !todo.isDone}
        }) )
    }

    const deleteTodo = (todoIndex) => {
        setTodos( prevTodos => prevTodos.filter( (todo, index) => index !== todoIndex ))
    }

    return (
        <div className="container">
            <h1>My todo list</h1>
            <AddTodo addNewTodo={addNewTodo} />
            <TodoList 
                todos={todos} 
                toggleDone={toggleDone} 
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

export default TodoMain