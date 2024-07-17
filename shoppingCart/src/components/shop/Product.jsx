import React from "react";
import { useCart } from "../../context/shopContext";

const Product = ({ name, price, id }) => {
  const { addToCart, cartItems } = useCart();

  const cartItemsCount = cartItems[id];

  return (
    <div className="product">
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemsCount > 0 && <>({cartItemsCount})</>}
      </button>
    </div>
  );
};

export default Product;
