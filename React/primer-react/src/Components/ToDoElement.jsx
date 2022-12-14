import React from 'react';

export default function ToDoElement({task, toggleToDo}) {
  
    const {id, tarea, completed} = task;

    function handleCompleted(){

        toggleToDo(id);

    }

    return (
    
        <li
            key={id} //{id} hace uso de variables javascript de arriba
            className="list-group-item"
        >
            <input type="checkbox" checked={completed} onChange={handleCompleted}></input>
            {tarea}
        </li>

    );
}
