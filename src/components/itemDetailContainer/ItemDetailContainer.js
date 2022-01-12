import { useParams, useState, useEffect } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(props) {
  const [product, setProduct] = useState(0);
  const { productId } = useParams();
  useEffect(() => {
    const searchOneItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        const selector = props.productos.find(({ id }) => id === productId);
        resolve(selector);
      }, 2000);
    });

    searchOneItem
      .then(
        (res) => {
          setProduct(res);
          console.log("producto", product);

        },
        (rej) => {
          console.log("rechazada-->", rej);
        }
      )
      .catch((error) => {
        console.log("Error");
      })
      .finally(() => {
        console.log("Final");
      });
  }, [product, productId, props.productos]);
  console.log("soy lo que vale product", product);
  return product !== 0 ? (
    <div class="container ">
      <div class="row justify-content-around item-detail ">
        <ItemDetail product={product} />
      </div>
    </div>
  ) : (
    <h2>Proximamente</h2>
  );
}

export default ItemDetailContainer;