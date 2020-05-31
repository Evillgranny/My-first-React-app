import React from 'react'
import ReactDOM from 'react-dom'
import CreateEl from './components/CreateEl'
import Hi from "./components/Hi";
import Timer from "./components/Timer";
import Welcome from "./components/Welcome";

ReactDOM.render(
    <div>
        <CreateEl />
        <Hi name={'Mikita'}/>
        <Timer start={'Start'} pause={'Stop'} reset={'Сброс'} />
        <Welcome name={'Mikita'}/>
    </div>,
    document.getElementById('app')
)
