import React, {useState} from 'react'
export default function Textform(props) {
    const[text, setText]=useState('Enter Text here');
    const handleclick1=()=>{
        console.log("upper case");
        let newtext=text.toUpperCase();
        setText(newtext)
        
    }
    const handleclick2=()=>{
        console.log("lower caser");
        let newtext=text.toLocaleLowerCase();
        setText(newtext)
        
    }
    const handleclick3=()=>{
        console.log("clear text");
        let newtext=" ";
        setText(newtext)
        
    }
    const handleclick4 = () => {
      console.log("select text");
      const textBox = document.getElementById("mybox");
      textBox.select();
      const newtext = textBox.value;
      console.log(newtext);
      setText(newtext);
    };
    const handleonchange=(event)=>{
       console.log("onchange");
       setText(event.target.value);

    }
    
     
    return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
 
  <textarea className="form-control" onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
  <button className='btn btn-primary my-4' onClick={handleclick1}>Convert to upper case</button>
  <button className='btn btn-primary my-4 mx-4' onClick={handleclick2}>Convert to lower case</button>
  <button className='btn btn-primary my-4 mx-4' onClick={handleclick3}>Clear Text</button>
  <button className='btn btn-primary my-4 mx-4' onClick={handleclick4}>Select all Text</button>
</div>

<div className="container my-3">
      <h2>Your text summry</h2>
      <p><b>{text.split(" ").length } </b>words and <b> {text.length}</b>character</p>
      <p>{0.008*text.split(" ").length}Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
     
     
     </div>
    

    </div>
  );
}
