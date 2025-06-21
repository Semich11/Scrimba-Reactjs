import { useState } from "react";
import "./main.css";
export default function Main() {
  const [meme, setMeme] = useState({
    topText: "Top Text",
    bottomText: "Button Text",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event){
    const {value} = event.currentTarget
    console.log(value)
            /**
         * Challenge: update the topText value in the meme state
         * object every time the topText input box is changed
         * 
         * Note: don't worry about bottomText at this point.
         */
  }

  return (
    <main>
      <div className="form">
        <label>
          {meme.topText}
          <input type="text" placeholder="One does not simply" name="topText" onChange={handleChange} />
        </label>

        <label>
          {meme.bottomText}
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}
