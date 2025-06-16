import { useState } from "react";

export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */

  // console.log(isShown)

  const [isShown, setIsShown] = useState(false);

  const view = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };
  console.log(isShown);
  return (
    <div>
      {props.setup ? <h3>{props.setup}</h3> : null}
      {isShown ? <p>{props.punchline}</p> : null}
      <button onClick={view}>{isShown ? "Hide" : "Show"} puchline</button>
      <hr />
    </div>
  );
}
