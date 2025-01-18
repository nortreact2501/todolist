function TodoElement({todo, toggleDoneRow, deleteTodoRow}) {
    let rowClasses = "row"

    if (todo.isDone) {
        rowClasses += " DoneRow"
    }

    return (
        <div className={rowClasses}>
            <div className="col-1" >
                <input
                    type="checkbox"
                    defaultChecked={todo.isDone}
                    onChange={toggleDoneRow}
                />
            </div>
            <div className="col-8" >
                {todo.description}
            </div>
            <div className="col-2" >
                {todo.priority}
            </div>
            <div className="col-1">
                <button 
                    className="btn btn-link"
                    onClick={deleteTodoRow}
                >X</button>
            </div>
        </div>

    )
}

export default TodoElement