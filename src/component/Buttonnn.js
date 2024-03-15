import "./Buttonn.css";

const Buttonn =({symbol, color, handleClick}) =>{

   return (
   <div onClick={() => handleClick(symbol)}
    className="Buttonnnnn" style={{backgroundColor: color}}
    >
        {symbol}
        </div>
    );
};
export default Buttonn;