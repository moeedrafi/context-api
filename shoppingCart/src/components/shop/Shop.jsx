import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            price={product.price}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
