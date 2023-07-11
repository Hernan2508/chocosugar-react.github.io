import {BsFillCartPlusFill} from "react-icons/bs";
import "./cartwidget.css";
import { useState } from "react";


const CartWidget = () => {

  const [count, setCount] = useState(0);

  const incrementarCarrito = () => {
     setCount(count + 1)
  }

  return (
        <div className= "carrito">
            <button className="boton-carrito" onClick={incrementarCarrito}><BsFillCartPlusFill/><span>{count}</span>
            </button>
        </div>
  ) 
}

export default CartWidget