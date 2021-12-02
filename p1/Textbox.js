import React, { useState } from "react";
function Textbox() {

    const[text,setText]=useState("");
    const upperCase=()=>{
        let a=text.toUpperCase();
        setText(a);
    }
    const lowerCase=()=>{
        let a=text.toLowerCase();
        setText(a);
    }
    const clearText=()=>{
        
        setText("");
    }
    const copyText=()=>{
        
        navigator.clipboard.writeText(text);
    }
   
   
    const Case=(event)=>{
        setText(event.target.value);
        
    }


  return (
    <>
    <div>
      <h3>Enter input</h3>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Enter your words : ) "
          id="floatingTextarea2"
          value={text}
          onChange={Case}
          rows="12"
          cols="12"

        ></textarea>
      </div>
      <button className="btn btn-primary  mr-5" onClick={upperCase} >Convert to UpperCase</button>
       <button className="btn btn-primary mr-5" onClick={lowerCase} >Convert to LowerCase</button>

       <button className="btn btn-primary mr-5" onClick={clearText} >Clear text</button>
    
       <button className="btn btn-primary mr-5" onClick={copyText} >Copy text</button>        
      </div>
      <div>
          <h1>Your text </h1>
          <h4>preview</h4>
          <p>{text}</p>
          <br/>
          <p>{text.split(" ").length} words  and  {text.length} characters</p>
      </div>
    </>
  );
}

export default Textbox;
