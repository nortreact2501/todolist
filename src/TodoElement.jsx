function TodoElement({todo}) {
    return (
        <div className="row">
            <div className="col-2" >
                <input
                    type="checkbox"
                    defaultChecked={todo.isDone}
                />
            </div>
            <div className="col-8" >
                {todo.description}
            </div>
            <div className="col-2" >
                {todo.priority}
            </div>
        </div>
    )
}

export default TodoElement