import ItemCategoryList from "./itemCategoryList/ItemCategoryList";
import { useParams} from "react-router-dom";

function ItemCategoryContainer(props) {
  const { categoryId } = useParams();
  const selector = props.productos.filter(
    ({ category }) => category === categoryId
  );

  return (
    <div class="container ">
      <div class="row justify-content-around box ">
        {selector.map((i) => (
          <ItemCategoryList productos={i} />
        ))}
      </div>
    </div>
  );
}

export default ItemCategoryContainer;