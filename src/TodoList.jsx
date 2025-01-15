import TodoElement from "./TodoElement"

function TodoList({todos}) {
    return (
        <div>
            {
                todos.map(
                    (todo, index) => <TodoElement key={index} todo={todo} />
                )
            }
        </div>
    )
}

export default TodoList