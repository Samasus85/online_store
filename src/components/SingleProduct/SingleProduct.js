import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import "./SingleProduct.css";
import { Loading } from "../Loading/Loading";
// import ProductPag from "../../pages/ProductsPag";
// import Pagination from "../../pages/Pagination";
import { BASE_URL } from "../../utils/general";

export const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setproductsPerPage] = useState(6);

  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/${id}`
        );
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, [id]);

  const { title, price, description, category, image } = product;
  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const currentProduct = products.slice(firstProductIndex, lastProductIndex)

  if (isLoading) {
    return <Loading />
  };

  const addToCartHandler = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="SingleProduct container">
      <div className="left-div">
        <img src={image} alt={title} />
      </div>
      <div className="right-div">
        <h2 className="title">{title}</h2>
        <h3 className="category">{category}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <button onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
      {/* <ProductPag products={currentProduct} loading={loading}/> */}
    {/* <Pagination productsPerPage={productsPerPage} */}
    {/* totalproducts={products.length} */}
    {/* /> */}
    </div>
  );
};


