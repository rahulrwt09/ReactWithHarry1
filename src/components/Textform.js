import React, {useState} from 'react'
export default function Textform(props) {
    const[text, setText]=useState('Enter Text here');
    const handleclick=()=>{
        console.log("upper case");
        setText('you clicked on handelupclick')
        
    }
    const handleonchange=(event)=>{
       console.log("onchange");
       setText(event.target.value);
    }
    
     
    return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
 
  <textarea className="form-control" onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
  <button className='btn btn-primary my-4' onClick={handleclick}>Convert to upper case</button>
</div>
    </div>
  );
}
