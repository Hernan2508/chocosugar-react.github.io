import "./itemlistcontainer.css";

const ItemListContainer = (props) => {
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
    </div>
  );
};

export default ItemListContainer;
