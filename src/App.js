import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

// import About from "./components/About";
import React, { useState } from "react";
// import Navbar2 from "./components/Navbar2";





var a = "Ayush"
var b = "shubham"

function App() {
  const [mode, setmode] = useState("light");

  const [text, settext] = useState("Enable dark mode");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");

      document.body.style.backgroundColor = "black";
      document.body.style.Color = "white";
      document.title = "Textutils - Dark Mode";

      settext("Enable light mode");
    } else {
      setmode("light");

      document.body.style.backgroundColor = "white";
      document.body.style.Color = "black";
      settext("Enable dark mode");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>


{/* <Navbar2/> */}
   
      <Navbar
        title="Text-Changer"
        tulli="AboutUs"
        mode={mode}
        togglemode={togglemode}
        text={text}
      />

      <div className="container my-3">



        {/* <About /> */}
       

        <Textform heading="Enter the text here" mode={mode} />
      </div>
      
    
    </>
  );
}

export default App;
