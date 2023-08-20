import Item from "../item/Item"
import "./itemlist.css"
import Container from 'react-bootstrap/Container';

const ItemList = ({productos}) => {
  return (
    <div className="ListGroup">
        {productos.map((prod) => (<Item key={prod.id} item = {prod}/>))}
    </div>
  )
}

export default ItemList