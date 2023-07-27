
import './itemdetail.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../itemcounter/ItemCounter';

const ItemDetail = ({id, imagen, titulo, precio, stock}) => {
  return (
    <div className='card_container'>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>Detalle sobre el producto adquirido</Card.Text>
                <Card.Text>Stock Disponible: {stock} unidades</Card.Text>
                <Card.Text>Precio: {precio}.00 PEN</Card.Text>
            </Card.Body>
            <ItemCounter/>
        </Card>
    </div>
  )
}

export default ItemDetail