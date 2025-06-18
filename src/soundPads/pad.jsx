import { useState } from "react"
import pads from "./pads"

import "./pad.css";
import PadButton from "./padButton";

export default function Pad({darkMode}) {
    const [pad, setPad] = useState(pads);

    function toggle(id){
        console.log(id)
                /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         */
    }

    const buttonElement = pad.map((pad) => {
        return (
            <PadButton color={pad.color} id={pad.id} key={pad.id} on={pad.on} toggle={toggle} />
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
