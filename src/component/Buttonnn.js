import "./Buttonn.css";

const Buttonn =({symbol, color, handleClick}) =>{

   return (
   <div className="Buttonnnnn"  onClick={() => handleClick(symbol)} style={{backgroundColor: color}}>
        {symbol}
        </div>
    );
};
export default Buttonn;