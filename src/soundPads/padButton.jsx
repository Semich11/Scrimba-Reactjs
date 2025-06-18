import { useState } from 'react'

const PadButton = ({color, on}) => {

  const [lightState, setLightState] = useState(on);

  const lightToggle = () => {
    console.log(lightState)
    setLightState(prevLightState => !prevLightState);
    console.log(lightState)
  }



  return (
    <button onClick={lightToggle} style={{backgroundColor: color}} className={lightState ? "on" : ""} >
    </button>
  )
}

export default PadButton
