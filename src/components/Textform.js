import React, {useState} from 'react'



export default function Textform(props) {
  const [text, setText] = useState(" ");
// changeText
const handleupclick = ()=>{
  // console.log("function is workin after click");
  let a = text.toUpperCase();
  setText(a)
  
}

const handlelowclick = ()=>{
  
  let b = text.toLowerCase();
  setText(b)
  
}
const cleartext = ()=>{
  
  let c = ""
  setText(c)
  
}
const removeextraspaces = ()=>{
  
  let d = text.split(/[ ]+/);
  setText(d.join(" "))
  
  
}
const handlecopy = ()=>{
  
  var text = document.getElementById('myBox');
  text.select();
  document.getSelection().removeAllRanges();
navigator.clipboard.writeText(text.value);
  
  
}




const handleonchange = (event)=>{
  // console.log("Now you change the text");
  setText(event.target.value)
}


  // setText = "New text here"
  // setText("sdk")
  return (
    
    <>
<div className='container' style={{  color:props.mode==='dark'?'white' : 'black'}}>
<h1>{props.heading} </h1>
<div className="mb-3">
</div>
  
  <textarea className="form-control" value={text} onChange={handleonchange} style={{  backgroundColor:props.mode==='dark'?'grey' : 'white', color:props.mode==='dark'?'white':'black' }} id="myBox" rows="10"></textarea>

  <button type="button" className="btn btn-primary my-3" onClick={handleupclick}>Convert to Uppercase</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={handlelowclick}  >Convert to Lowercase</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={cleartext}  >Clear Text</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={handlecopy}  >Copy Text</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={removeextraspaces}  >Remove Extra spaces</button>

</div>
<div className="container"    style={{  color:props.mode==='dark'?'white' : 'black'}} >
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} characters </p>
  <p>{0.008 * text.split(" ").length} minutes time taken to read this </p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Please Enter your text to preview it here"}</p>
</div>

    </>
  )
}
