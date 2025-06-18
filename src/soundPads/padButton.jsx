import React from 'react'

const PadButton = ({color, on}) => {
  return (
    <button style={{backgroundColor: color}} className={on ? "on" : ""} >
    </button>
  )
}

export default PadButton
