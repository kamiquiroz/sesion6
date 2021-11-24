import React from "react";

export function TodoItem ( {item, toggleTask}) {
    //{ id: 1, task: 'Tarea 1', completed: false }
    const {id , task, completed } = item;
    //Destructuring
    //id=1 => id=item.id
    //task="Tarea 1" => item.task
    //completed=false => item.completed

    const handleTaskClick = () => {
        toggleTask(id);
    }
    
    return(
        <li>
            <input type="checkbox" checked={completed} onChange={handleTaskClick}/>
            {task}
        </li>
    );
}