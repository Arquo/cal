import "./input.css"

const Input =({resultt, texttt})=> {
    return (
    <div className="inputwrapper">
        <div className="result">
            <h1>{resultt}</h1>
        </div>


        <div className="Texxxt">
            <h2>{texttt}</h2>
        </div>
    </div>);
}; 

export default Input;