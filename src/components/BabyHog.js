import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";
import offspring from '../data'
// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ name, weight = 0, hobby, eyeColor}) {
  const [hogWeight, setHogWeight] = useState(0)
  
  let [hogPicture, setHogPicture] = useState(normalBaby)
// console.log(hogPicture)
  function handleChangeWeight(e) {
    // debugger
    if (e.target.name === "+") {
      setHogWeight(hogWeight + 1)
    } else if (e.target.name === "-") {
      setHogWeight(hogWeight - 1)
    }
  }

  function handleHogPictureChange() {
    // console.log(e.target)
    if (eyeColor === "blue") {
      setHogPicture(hogPicture = BlueBaby)
    } else if (eyeColor === "glowing") {
      setHogPicture(hogPicture = GlowingBaby)
    } else if (eyeColor === "sun") {
      setHogPicture(hogPicture = SunBaby)
    }
  }

  handleHogPictureChange()

  
  return (
    <li className="hogbabies">
      <h1>Name {name}</h1>
      <h3>Weight: {hogWeight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={hogPicture}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
