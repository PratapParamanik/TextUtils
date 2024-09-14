import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('UperCase Clicked !' + text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to UpperCase!","success");
  };
  const handleLoClick = () => {
    // console.log('LowerCase Clicked !' + text);
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to LowerCase!","success");
  };
  const handleClearClick = () => {
    // console.log('Text Cleared !');
    let newtext = '';
    settext(newtext);
    props.showAlert("Text Cleared!","success");
  };

  const handelOnChange = (event) => {
    // console.log('On Changed!');
    settext(event.target.value);
  };

  const handelCopy = () =>{
    // console.log('Text Copied !');
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!","success");
  }

  const handelExtraSpaces = () => {
    // console.log('Extra Spaces Removed !');
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success");
  }

  const [text, settext] = useState("");
  
  // text = "New Text"; // Wrong way to change the state
  // settext("New Text"); // Currect way to change the state // Always Comment Whole Line

  return (
    <>
      <div className="container"  style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            style={{backgroundColor : props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to UpperCase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to LowerCase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelCopy}> Copy Text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelExtraSpaces}> Remove Extra Spaces </button>
      </div>
      <div className="container my-3"  style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

// TextForm.defaultProps ={
//     heading: 'Set title here'
// }
