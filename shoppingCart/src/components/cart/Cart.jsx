import React from "react";
import { PRODUCTS } from "../../Products";
import { useCart } from "../../context/shopContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateCart } = useCart();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div className="cartItem" key={product.id}>
                <div className="description">
                  <p>
                    <b>{product.productName}</b>
                  </p>
                  <p>{product.price}</p>
                  <div className="countHandler">
                    <button onClick={() => removeFromCart(product.id)}>
                      {" "}
                      -{" "}
                    </button>
                    <input
                      value={cartItems[product.id]}
                      onChange={(e) => updateCart(Number(e.target.value), product.id)}
                    />
                    <button onClick={() => addToCart(product.id)}> + </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
