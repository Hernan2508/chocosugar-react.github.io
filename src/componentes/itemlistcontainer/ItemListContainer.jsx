import "./itemlistcontainer.css";
import { getProducts, getProductsByCategory } from "../../postres";
import { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc( categoryId )
    .then(response =>{
        setProductos(response)
        console.log(productos)
    })
    .catch(error =>{
        console.log(error)
    })
  
  }, [categoryId])

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">{props.greeting}</h1>
        <p className="lead">Encuentra, personaliza y realiza tu pedido con los diferentes productos que ofrecemos para ti en tan solo unos pocos pasos.<br/>
        La personalización y el diseño al alcance de tus manos.</p>
        <hr className="my-4"/>
        <p>Te ofrecemos nuestro manual de información para que no te pierdas ninguno de nuestros productos.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Buscar más</a>
      </div>
      <ItemList products = {productos}/>
    </div>
  );
};

export default ItemListContainer;
