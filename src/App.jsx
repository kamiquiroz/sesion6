import React, { Fragment, useState, useRef, useEffect } from "react";
import {TodoList} from "./components/TodoList";
import {v4 as uuidv4} from "uuid";

export function App() {
    //useState para crear la lista con la primera variable
    // y con el segundo actualizar la lista
    const [elementos, setElementos] = useState([ { id: 1, task: 'Tarea 1', completed: false }]);

    //Hook para obtener la referencia del elemento relacionado
    const taskRef = useRef();

    useEffect(() => {
        localStorage.setItem("list.key", JSON.stringify(elementos));
    }, [elementos])

    useEffect( () => {
        const storedTask = JSON.parse(localStorage.getItem("list.key"));
        if (storedTask) {
            setElementos(storedTask);
        }
    },[])

    const handleTaskAdd = () => {
        //obtener el valor del input
        const task =  taskRef.current.value;

        //Si el valor está vacio no actualiza el componente
        if (task === "") return;
        
        //Sino actualizo la lista con el nuevo valor que estoy ingresando
        setElementos((prevElements) => {
            return [...prevElements, {id:uuidv4() , task, completed:false}];
        });
        taskRef.current.value = null;
        //debugger;
    }

    const handleClearCompletedTask = () => {
        const newTask = elementos.filter((task) => !task.completed)
        setElementos(newTask);
    }

    const toggleTask = (id) => {
        const newTask = [...elementos];
        const task = newTask.find( (x) => x.id === id );
        //Forma larga de hacer sin usar el find
        /*for (let i=0;i<newTask.length;i++) {
            if (newTask[i].id == id) {
                task = newTask[i];
            }
        }*/
        task.completed = !task.completed;
        setElementos(newTask);
    }


  
    return (
        <Fragment>
            <TodoList lista={elementos} toggleTask={toggleTask} />
            <input ref={taskRef} type="text" placeholder="Nueva tarea" ></input>
            <button onClick={ handleTaskAdd }>+</button>
            <button onClick={ handleClearCompletedTask }>-</button>
        </Fragment>
    );
}

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                +
                </button>
                <button onClick={() => setCount(count - 1)}>
                -
                </button>
        </div>
    );
};

//export default Counter;

const Actualizable = ({ mensaje }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        const espera = setTimeout(() => setText(mensaje), 5000);
        return () => clearTimeout(espera);
    }, [mensaje]);

    return <p>{text}</p>;
};


export default Actualizable;


