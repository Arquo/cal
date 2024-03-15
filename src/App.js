import './App.css';
import Buttonn from "./component/Buttonnn";
import Input from "./component/input";
import { useState } from 'react';
import * as math from "mathjs";


const App = () => {
  const [text, setText] = useState(""); //string 
  const [result, setResult] = useState("");
  const addToTextttt = (val) => {
    setText((text) => [...text,  val+" "]);
  };

  const calccculate = () => {
    const input = text.joiin("");
    setResult(math.evaluate(input));
  };
  const resetInput =() => {
    setText("");
    setResult("");
  };

  const somecolor = "#38AFBB";


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
