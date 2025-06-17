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

     /**
     * Challenge part 2:
     * 1. Create a separate component called "Pad" and
     *    replace the `button` above with our <Pad /> component
     * 2. Pass the Pad component a prop called `color` with the
     *    value of the same name from the `padsData` objects
     * 3. In the Pad component, apply an inline style to the <button>
     *    to set the backgroundColor of the button.
     * 
     * (We'll deal with the "on" property soon)
     */
    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}
