import { useDispatch } from "react-redux";
import { removeFromCart, addItemQuantity, subtractItemQuantity } from "../../store/cartSlice";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = props;

  const addItemQuantityHandler = () => {
    dispatch(addItemQuantity(props))
  }
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(props))
  }
 const subtractItemQuantityHandler = () => {
  dispatch(subtractItemQuantity(props))
 }

  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-title">
        <h2>{title}</h2>
        <h2 className="product-price">${price}</h2>
        <button onClick={removeFromCartHandler}>
          Remove from cart
        </button>
      </div>
      <div className="quantity">
        <button onClick={subtractItemQuantityHandler}>
          <IoRemoveSharp />
        </button>
        <p>{quantity}</p>
        <button onClick={addItemQuantityHandler}>
          <IoAddSharp />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
