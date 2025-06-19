import { useState } from "react";
import pads from "./pads";

import "./pad.css";
import PadButton from "./padButton";

export default function Pad({ darkMode }) {
  const [pad, setPad] = useState(pads);

  function toggle(id) {
    setPad((prevPad) =>
      prevPad.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }

  const buttonElement = pad.map((pad) => {
    return (
      <PadButton
        color={pad.color}
        id={pad.id}
        key={pad.id}
        on={pad.on}
        toggle={toggle}
      />
    );
  });

  return (
    <main>
      <div className="pad-container">{buttonElement}</div>
    </main>
  );
}
