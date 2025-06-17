import { useState } from "react"
import pads from "./pads"

import "./pad.css";

export default function Pad({darkMode}) {
    const [pad, setPad] = useState(pads);

    let style = {
        backgroundColor : darkMode ? "#222222" : "#cccccc",
        color: darkMode ? "white" : "black"
    }

    const buttonElement = pad.map((pad) => {
        if(pad.id % 2 === 0){
            console.log(pad.id)
            return (
            <button style={{color: "red", backgroundColor: darkMode ? "#222222" : "#cccccc"}} key={pad.id} >pad</button>
        )
        }
        return (
            <button style={style} key={pad.id} >pad</button>
        )
    })
    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}
