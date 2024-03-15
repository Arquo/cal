import "./input.css";

const Input =({result, text})=> {
    return (
    <div className="inputwrapper">
        <div className="result">
            <h1>{result}</h1>
        </div>


        <div className="Texxxt">
            <h2>{text}</h2>
        </div>
    </div>);
}; 

export default Input;