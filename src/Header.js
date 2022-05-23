import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        ></img>
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="headerNav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineone">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLinetwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header_link">
          <div className="header_option">
            <span className="header_optionLineone">Returns</span>
            <span className="header_optionLinetwo">and Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineone">Your</span>
            <span className="header_optionLinetwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLinetwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
