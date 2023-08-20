import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../cartItem/CartItem'
import './cart.css'

const Cart = () => {

  const{cart, clearCart, total }= useContext(CartContext)
  console.log(cart)
  return (
    <div>
        {cart.length 
        ? <div>
            <div>
              {cart.map((item) => <CartItem key={item.id} item={item}/>)}
            </div>
            <p>Total a pagar $ {total()}</p>
            <div>
                <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
                <Link className='btn btn-dark' to='/checkout'>Terminar compra e ir al CheckOut</Link>
            </div>
          </div>
        : <div>
            <h3>Tu carrito está vacio</h3>
            <Link to='/'><button>Ir a comprar</button></Link>
          </div>}
    </div>
  )
}

export default Cart