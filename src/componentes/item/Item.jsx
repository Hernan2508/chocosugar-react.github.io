import './item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({item}) => {
  return (
    <div className='card_container'>
        <Card style={{ width: '16.1rem' }}>
            <Card.Img variant="top" src={item.imagen} style={{ width: '16rem' }}/>
            <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Text>
                Stock Disponible: {item.stock}
                </Card.Text>
                <Card.Text>Precio: {item.precio}.00 PEN</Card.Text>
                <Button variant="primary">
                    <Link to={`/item/${item.id}`} className='Option'>Ver Detalle</Link>
                </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item