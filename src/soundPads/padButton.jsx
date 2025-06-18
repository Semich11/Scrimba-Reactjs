import { useState } from 'react'

const PadButton = (props) => {

  const [lightState, setLightState] = useState(props.on);

  return (
    <button onClick={props.toggle} style={{backgroundColor: props.color}} className={lightState ? "on" : ""} >
    </button>
  )
}

export default PadButton
