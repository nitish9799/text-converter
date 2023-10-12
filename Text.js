import React, {useState} from "react";

function Text(props) {

    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
      }
    
      const handleLoClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
      }
      const handleOnChange=(event)=>{
        setText(event.target.value)
      }
    
      const [text, setText]=useState('');

    return (
        <>
        <div className="container">
            <h3>{props.box}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowerercase</button>
        </div>
        <div className="container my-5">
        <h3>Text Summary</h3>
        <p>Your text has {text.split(' ').length} words and {text.length} characters.</p>
        </div>
        </>
    );
}
export default Text;