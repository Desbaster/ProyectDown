import Item from "../item/Item";

function ItemList(props) {
  const PropProduct = props.productos;
  console.log(PropProduct);
  return (
    <div className="container ">
      <div class="row justify-content-around box ">
        {props.productos.map((producto) => (
          <Item productos={producto} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
