import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div>
      <h2> Productos</h2>
      <ItemList productos={props.productos} />
    </div>
  );
}

export default ItemListContainer;
