import React, { useState } from "react";
import { useCart } from "./CartContext";

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart </h2>
      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0 align-items-center">
                <div className="col-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid p-2"
                    style={{ maxHeight: "120px", objectFit: "contain" }}
                  />
                </div>
                <div className="col-9">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <input
                      type="number"
                      className="form-control w-25"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                    />
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h4 className="mt-4">Total: ${totalPrice}</h4>
          <button className="btn btn-success mt-3" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
      {showPopup && (
        <div className="alert alert-success mt-3 text-center" role="alert">
          Order placed successfully!
        </div>
      )}
    </div>
  );
}

export default CartPage;
