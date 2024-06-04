/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Composer(props) {
    const [label,setLabel] = useState("");

    const handleUpdateLabel = (e) => setLabel(e.target.value);

    const handleToDoClick = () => {
        props.handleAddToDo(toDo);
    }

    function createToDo(label) {
        return {
            id: Math.floor(Math.random * 100000),
            label: label,
            completed: false
        }
    }

    return <>
    <li>
        <input
         placeholder = "Add new TODO"
         type= "text"
         value={label}
         onChange={handleUpdateLabel}
        />
         <button onClick={handleToDoClick}>ADD TO DO</button>
    </li>
    </>
}