import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper has clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    
    props.showAlert("converted to upper case", "success");
  };

  const handleLoClick = () => {
    // console.log("upper has clicked" + text)
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("converted to lower  case", "success");

  };

  const handleOnClick = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleRemoveSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("enter ur text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnClick}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-4" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-4" onClick={handleCopy}>
          Copy The Text
        </button>
        <button className="btn btn-primary mx-4" onClick={handleClear}>
          Clear The Text
        </button>

        <button className="btn btn-primary mx-4 my-4" onClick={handleRemoveSpace}>
          Remove extra space
        </button>
        
      </div>
      <div className="container my-4">
        <h2>Ur Text Summary</h2>
        <p>
          {text.split(" ").length} & {text.length}
        </p>
        <p>{0.008 * text.split(" ").length}Minutes Reads</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter something in text box above"}</p>
      </div>
    </>
  );
}
