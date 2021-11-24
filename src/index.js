import React from "react";
import ReactDOM from "react-dom";
import { App } from './App'
import Counter from './App'
import Actualizable from './App'

//ReactDOM.render(<Actualizable />, document.getElementById('root'))
//ReactDOM.render(<Counter />, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))
/*
//Componentes: permite separar la interfaz en piezas independientes y está
//compuesta de elementos
function getTime() {
    //Elementos: son los bloques mas pequeños de mi aplicación en React
    const element = (
        <div>
            <h1>Hello everyone!!!</h1>
            <h2>It is { new Date().toLocaleTimeString() }.</h2>  
        </div>
    );

    //Render recibe un elemento y el contenedor donde
    //se mostrará en mi página HTML
    ReactDOM.render(element, document.getElementById('root'))
}

setInterval(getTime,1000);*/


