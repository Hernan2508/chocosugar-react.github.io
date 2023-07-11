import './productos.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Productos = () => {
  return (
    <div className='card_container'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Tortas</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Cupcakes</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Galletas Personalizadas</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Bocaditos</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Otros</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    </div>
  )
}

export default Productos