import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';


const CartItem = ({item}) => {

  const {removeItem} = useContext(CartContext)



  return (
    <div className="d-flex justify-content-around align-items-center">
        <img src={item.imagen} alt={item.titulo} width={'150rem'}/>
        <p>{item.titulo}</p>
        <p>S/{item.precio}</p>
        <p>{item.quantity}</p>
        <p>SubTotal: S/{item.quantity * item.precio}</p>
        <button className='btn btn-danger' onClick={() => removeItem(item.id)}> X </button>
    </div>
  );
};

export default CartItem;