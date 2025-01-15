import { useState } from "react"

function AddTodo({addNewTodo}) {
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState(3)

    const [todo, setTodo] = useState({})

    const addClicked = () => {
        console.log(description, priority)
        addNewTodo({description, priority})
        setDescription('')
        setPriority(3)
    }

    return (
        <div className="row">
            <input 
                className="col-8" 
                placeholder="description"  
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input 
                className="col-2" 
                placeholder="priority" 
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
            />
            <button
                className="col-2 btn btn-link"
                onClick={addClicked}
            >
                Lisa
            </button>
        </div>
    )
}

export default AddTodo