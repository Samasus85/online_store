import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

export const Product = ({ id, image, title, price }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const productDetailHandler = () => {
    history.push(`/products/${id}`)
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ id, image, title, price }))
  }

  return (
    <div className="product">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <h3>{price}руб</h3>
      </div>
      <div className="buttons">
        <button onClick={productDetailHandler}>
          Product details
        </button>
        <button
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};


