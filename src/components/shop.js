// src/pages/Shop.js
import React from "react";
import ProductCard from "./productcard"; // make sure the path is correct
import products from "../data/products.json";       // make sure the path matches your JSON file

const Shop = () => {
  return (
    <div className="shop-page">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          mainImage={product.mainImage}
          images={product.images}
          description={product.description}
          details={product.details}
          sizes={product.sizes} // optional, if your JSON has sizes
        />
      ))}
    </div>
  );
};

export default Shop;
