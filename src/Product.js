import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispach] = useStateValue();

  const addToBasket = () => {
    dispach({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="Product_info">
        <p> {title} </p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product_img" src={image} alt=""></img>
      <button className="product_button" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
