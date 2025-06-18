import { useState } from "react"
import pads from "./pads"

import "./pad.css";
import PadButton from "./padButton";

export default function Pad({darkMode}) {
    const [pad, setPad] = useState(pads);

    let style = {
        backgroundColor : darkMode ? "#222222" : "#cccccc",
        color: darkMode ? "white" : "black"
    }

    const buttonElement = pad.map((pad) => {
        return (
            <PadButton color={pad.color} key={pad.id} />
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
