import cart from '../../img/cart.svg';
import { Nav} from "react-bootstrap";

function CartWidget() {
  return (
    <>
      <img src={cart} width="30" height="30" alt="cart logo" />
      <Nav.Item>
        <Nav.Link href="/home">4</Nav.Link>
      </Nav.Item>
    </>
  );
}

export default CartWidget
