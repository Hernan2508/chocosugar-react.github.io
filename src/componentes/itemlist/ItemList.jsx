import Item from "../item/Item"
import "./itemlist.css"
import Container from 'react-bootstrap/Container';

const ItemList = ({products}) => {
  return (
    <div className="ListGroup">
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList