import "./cartwidget.css";
import {BsFillCartPlusFill} from "react-icons/bs";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

import { useState } from "react";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext);
  

  return (
        <div className= "carrito-container">
            {totalQuantity() > 0 &&
            <div className = "carrito-control">
                <h5 className="carrito"><BsFillCartPlusFill/><span>{totalQuantity()}</span></h5>
            </div>
            }
        </div>
  ) 
}

export default CartWidget