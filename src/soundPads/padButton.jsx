import { useState } from 'react'

const PadButton = ({color, on}) => {

  const [lightState, setLightState] = useState(on);

  const lightToggle = () => {
    console.log(lightState)
    setLightState(prevLightState => !prevLightState);
    console.log(lightState)
  }

  /**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 */

  return (
    <button onClick={lightToggle} style={{backgroundColor: color}} className={lightState ? "on" : ""} >
    </button>
  )
}

export default PadButton
