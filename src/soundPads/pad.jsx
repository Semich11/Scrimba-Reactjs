import { useState } from "react"
import pads from "./pads"

import "./pad.css";

export default function App() {
    const [pad, setPad] =useState(pads);
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    const buttonElement = pad.map((pad) => (
        <button key={pad.id} >pad</button>
    ))
    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}
