import { ToDo } from "./ToDo";

export const ToDoList = ({toDoList, removeToDo, renderCompleted}) => {
    return (
        <ul>
            {toDoList.map((toDo)=>{
                return (
                    <ToDo 
                        key={toDo.id}
                        completed={toDo.completed}
                        text={toDo.text}
                        removeToDo={removeToDo}
                        id={toDo.id}
                        renderCompleted={renderCompleted}
                    ></ToDo>
                )
            })}
        </ul>
    ) 
}