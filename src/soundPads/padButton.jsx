import { useState } from 'react'

const PadButton = (props) => {


  return (
    <button onClick={() => props.toggle(props.id)} style={{backgroundColor: props.color}} className={props.on ? "on" : ""} > 
    </button>
  )
}

export default PadButton
