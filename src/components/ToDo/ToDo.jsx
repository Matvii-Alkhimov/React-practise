export function ToDo({text, completed, removeToDo, id, renderCompleted}) {
    return(
        <li data-id={id}  className="goal-item">
            <input type="checkbox" checked={completed} onChange={()=>{renderCompleted(id)}} />
            <p>{text}</p>
            <button onClick={removeToDo} type="button">Delete</button>
        </li>
    )
}