//again we use rfc for react function based component
import React, { useState } from 'react'

export default function TextForm(props) {
      
    const handleUpCLick = ()=>{
       // console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted into uppercase", "success");
    }
    const handledownCLick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("converted into lowercase", "success");
    }
    
    const handleClearCLick = ()=>{
        let newtext = '';
        setText(newtext)
        props.showAlert("text cleared", "success");
    }
    const handleOnChange = (event)=>{
       // console.log("on change ");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
//to change text use set text method
  return (
    
    <>
    <div className="conatiner" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white',
color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="9"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpCLick}>convert into upper case</button>
<button className="btn btn-primary mx-2" onClick={handledownCLick}>convert into lower case</button>
<button className="btn btn-primary mx-2" onClick={handleClearCLick}>clear text</button>
    </div>

    
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#8E8C8B'}}>
    <h2>your text summary</h2>
    <p>
        {text.split(" ").length} words and {text.length} characters
    </p>
    <p>
        {0.008 * text.split(" ").length} minutes requuired to read   
     </p>
     <h2>preview</h2>
     <p>{text.length>0?text:"enter something to preview here"}</p>
</div>
</>
  )
}

