import './itemdetail.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../itemcounter/ItemCounter';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

const ItemDetail = ({producto}) => { 


  const [quantityAdded, setQuantityAdded] = useState(0)
  const {addItem} = useContext(CartContext) 


  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    

      /* const item = {id, imagen, titulo, precio, stock} */

      addItem(producto, quantity)
 
  }


  return (
    <div className='card_container'>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.titulo}</Card.Title>
                <Card.Text>Detalle sobre el producto adquirido hola</Card.Text>
                <Card.Text>Stock Disponible: {producto.stock} unidades</Card.Text>
                <Card.Text>Precio: {producto.precio}.00 PEN</Card.Text>
            </Card.Body>
            <div className='ItemFooter'>
              {
                quantityAdded > 0 ? (<Link to='/cart' className="Option">
                                        <div className='terminar-compra-button'>
                                          <Button>Terminar Compra</Button>
                                        </div>
                                    </Link>) : 
                                    (<ItemCounter initial={1} stock={producto.stock} onAdd={handleOnAdd}/>)
              }
            </div>
        </Card>
    </div>
  )
}

export default ItemDetail