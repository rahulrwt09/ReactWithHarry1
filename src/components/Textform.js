import React, {useState} from 'react'
export default function Textform(props) {
    const[text, setText]=useState('Enter Text here');
     
    return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
 
  <textarea className="form-control" value={text} id="mybox" rows="8"></textarea>
  <button className='btn btn-primary my-4'>Convert to upper case</button>
</div>
    </div>
  );
}
