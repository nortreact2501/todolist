import TodoElement from "./TodoElement"

function TodoList({todos, toggleDone, deleteTodo}) {
    return (
        <div>
            {
                todos.map(
                    (todo, index) => (<TodoElement 
                                        key={index} 
                                        todo={todo}
                                        toggleDoneRow={() => toggleDone(index)} 
                                        deleteTodoRow={() => deleteTodo(index)}
                                      />)
                )
            }
        </div>
    )
}

export default TodoList