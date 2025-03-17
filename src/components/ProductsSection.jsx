import React, { useState, useEffect } from "react";
import api from "../api/index.api";

function ProductsSection() {
  const [products, setProducts] = useState([]);

  const handleClickLikeButton = async (productId) => {
    await api.products.likeProduct(productId);
  };

  useEffect(() => {
    api.products.getAllProducts().then((result) => setProducts(result));
  });

  return (
    <section>
      <h2>상품 목록</h2>
      <hr />

      <ul>
        {products.map((product) => {
          <li key={product.id}>
            <span>
              "{product.name}" ({product.price.toLocaleString()}원)
            </span>

            <button onClick={() => handleClickLikeButton(product.id)}>
              찜하기
            </button>
          </li>;
        })}
      </ul>
    </section>
  );
}

export default ProductsSection;
