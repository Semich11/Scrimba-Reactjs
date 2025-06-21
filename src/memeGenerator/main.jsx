import { useState } from "react";
import "./main.css";
export default function Main() {
    const [meme, setMeme] = useState({ topText:"Top Text", bottomText: "Button Text", imageUrl: "http://i.imgflip.com/1bij.jpg" })


  return (
    <main>
      <div className="form">
        <label>
          {meme.topText}
          <input type="text" placeholder="One does not simply" name="topText" />
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
