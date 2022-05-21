import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { Product } from "./Product";
import "./AllProducts.css";
import { BASE_URL } from "../../utils/general";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}`);
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="all container">
      
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};


