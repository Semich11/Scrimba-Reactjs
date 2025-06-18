import { useState } from "react"
import pads from "./pads"

import "./pad.css";
import PadButton from "./padButton";

export default function Pad({darkMode}) {
    const [pad, setPad] = useState(pads);

    function toggle(){
        console.log("Clicked!")
    }

        /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Pad components
     * and set it up so when they get clicked, the function runs
     */

    const buttonElement = pad.map((pad) => {
        return (
            <PadButton color={pad.color} key={pad.id} on={pad.on} toggle={toggle} />
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
