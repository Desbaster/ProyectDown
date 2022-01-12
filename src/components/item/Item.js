import { Link } from "react-router-dom";

function Items(props) {
  return (
    <div class="col-lg-3 col-md-3 box-gallery-item">
      <Link
        to={`/item/${props.productos.id}`}
        className="no-text-decoration black-text"
      >
        <img alt="pulsera" src={props.productos.img}></img>
      </Link>
      <Link
        to={`/item/${props.productos.id}`}
        className="no-text-decoration black-text"
      >
        <h2 className="item-name">{props.productos.name}</h2>
      </Link>
      <h2 className="card-price">{props.productos.value}</h2>
      <button>agregar al carrito </button>
    </div>
  );
}

export default Items;
