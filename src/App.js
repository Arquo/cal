import './App.css';
import Buttonn from "./component/Buttonnn";
import Input from "./component/input";
import { useState } from 'react';
import * as math from "mathjs";


const App = () => {

 
  const [result, setResult] = useState("");   
  const [text, setText] = useState("");   
     // state variable, declared with "useState", 
     // text(current state value): is initialized with "", 
     // setText(function) : allow us to update state value

   // "..." spreads string to char and add val at the end. [] puts everything back, in to an array
  const addToTextttt = (val) => {
    setText((text) => [...text,  val ]);
  };   

  // text is an array
  const calccculate = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  //reset
  const resetInput =() => {
    setText("");
    setResult("");
  };

  const somecolor = "#38AFBB";


 // onClick={() => handleClick(symbol)}, when botton is clicked, 
 // handleClick={addToTextttt},  {addToTextttt} function is assigned to handleClick
 // handleClick(symbol) is now addToTextttt(symbol ), which takes botton symbol value, and add to text
 // WOWOWOWOOWOWOW

 // also no space for number so, "_X_" for operators

  return (
    <div className="App">
      <div className="wrappppper">
        <Input text={text} result={result} />
        <div className="rowww">
         
         <Buttonn symbol = "8" handleClick={addToTextttt}/>
         <Buttonn symbol = "2"handleClick={addToTextttt}/>
         <Buttonn symbol = "3"handleClick={addToTextttt}/>
         <Buttonn symbol = " / " color = {somecolor} handleClick={addToTextttt}/>
        </div>
        <div className="rowww">
         <Buttonn symbol = "9"handleClick={addToTextttt}/>
         <Buttonn symbol = "CC" color={somecolor} handleClick={resetInput}/>
         <Buttonn symbol = "4"handleClick={addToTextttt}/>
         <Buttonn symbol = "1"handleClick={addToTextttt}/>
        </div>
        <div className="rowww">
         <Buttonn symbol = "0"handleClick={addToTextttt}/>
         <Buttonn symbol = "7"handleClick={addToTextttt}/>
         <Buttonn symbol = " * " color={somecolor}handleClick={addToTextttt}/>
         <Buttonn symbol = "6"handleClick={addToTextttt}/>
        </div>
        <div className="rowww">
         <Buttonn symbol = " - " color={somecolor}handleClick={addToTextttt}/>
         <Buttonn symbol = " = "color={somecolor}handleClick={calccculate}/>
         <Buttonn symbol = "5"handleClick={addToTextttt}/>
         <Buttonn symbol = " + " color={somecolor}handleClick={addToTextttt}/>
        </div>
      </div>
    </div>
  );
};

export default App;
