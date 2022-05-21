// import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoBag } from "react-icons/io5";
// import BagIcon from '../../assets/icons/bag.svg'
import "./Navbar.css";

export const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const { pathname } = useLocation();

  return (
    <>
      {(pathname !== "/*" && pathname !== "/products/:id") && (
        <div className="Navbar">
          <div className="container">
            <Link to="/">Products</Link>
            <Link to="/cart" className="cart">
              <IoBag />
              {/* <img src={BagIcon}/> */}
              {quantity !== 0 && <span>{quantity}</span>}
            </Link>
          </div>
        </div>
      )};
    </>
  );
};


