import {BsFillCartPlusFill} from "react-icons/bs";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import "./itemcounter.css";
import { useState } from "react";
import { Button } from "react-bootstrap";


const ItemCounter = ({stock, initial, onAdd}) => {

  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if(quantity < stock){
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
 }

  return (
        <div className= "carrito-container">
            <div className = "carrito-control">
                <button className="boton-carrito" onClick={decrement}><AiOutlineMinusCircle/></button>
                <h5 className="carrito"><BsFillCartPlusFill/><span>{quantity}</span></h5>
                <button className="boton-carrito" onClick={increment}><AiOutlinePlusCircle/></button>
            </div>
            <div className="agregar-carrito">
              <button className="agregar-carrito-boton" onClick={() =>onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
  ) 
}

export default ItemCounter