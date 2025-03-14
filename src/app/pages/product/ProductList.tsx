import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} data-testid="product-item">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
