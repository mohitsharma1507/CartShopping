import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList({ setCartItems }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const url =
        selectedCategory === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${selectedCategory}`;
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center"> Our Products</h2>
      <div className="mb-4 d-flex justify-content-center">
        <select
          className="form-select w-50"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "220px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-truncate">{product.title}</h6>
                <p className="card-text fw-bold text-success mb-2">
                  ${product.price}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-outline-primary mt-auto"
                >
                  View Details
                </Link>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-outline-primary mt-auto"
                  onClick={() => setCartItems((prev) => [...prev, product])}
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
