import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = `https://fakestoreapi.com/products/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Product Detail</h2>
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src={product.image}
              className="card-img-top p-3"
              alt={product.title}
              style={{ height: "300px", objectFit: "contain" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text fw-bold text-success">${product.price}</p>
              <Link
                to="/cart"
                className="btn btn-warning"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
