
function ItemDetail(props) {
  console.log("im in itemdeital y vale", props.product);
  return (
    <div class="row justify-content-around  ">
      <div class="col-lg-3 col-md-3 box-gallery-item">
        <img alt="2" src={props.product.img}></img>
      </div>
      <div class="col-lg-8 col-md-3 justify-content-start">
        <h2>{props.product.name}</h2>
        <h3 className="common-price p-3">{props.product.value}</h3>
        <h3 className="p-3">{props.product.description}</h3>
        <button>agregar al carrito </button>
      </div>
    </div>
  );
}

export default ItemDetail;