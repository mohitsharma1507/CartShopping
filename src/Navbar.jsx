import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ cartItems }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  // Calculate total quantity of items in the cart
  const cartItemCounts = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Shopping Cart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
                {cartItemCounts > 0 && (
                  <span
                    className="badge bg-danger ms-1"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {cartItemCounts}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={handleLogout}
                style={{ marginTop: "6px" }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
