import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList ( { lista , toggleTask }) {
    return(
        <ul>
            { lista.map((item) => (
                <TodoItem key={item.id} item={item} toggleTask={toggleTask} />
            ))}
        </ul>
    );
}

