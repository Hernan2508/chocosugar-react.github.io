import {BsFillCartPlusFill} from "react-icons/bs";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import "./cartwidget.css";
import { useState } from "react";
import { Button } from "react-bootstrap";


const CartWidget = () => {

  const [count, setCount] = useState(0);

  const incrementarCarrito = () => {
    if(count >= 0){
     setCount(count + 1)
    }
  }

  const disminuirCarrito = () => {
    if(count >= 1){
    setCount(count - 1)
    }
 }

  return (
        <div className= "carrito-container">
            <div className = "carrito-control">
                <button className="boton-carrito" onClick={disminuirCarrito}><AiOutlineMinusCircle/></button>
                <h5 className="carrito"><BsFillCartPlusFill/><span>{count}</span></h5>
                <button className="boton-carrito" onClick={incrementarCarrito}><AiOutlinePlusCircle/></button>
            </div>
        </div>
  ) 
}

export default CartWidget