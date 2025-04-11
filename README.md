# 🛒 React Shopping Cart

This is a simple and responsive shopping website built using **React.js** and the **Fake Store API** as part of a front-end internship assignment. It includes authentication, product browsing, cart management, and order confirmation features.

## Live Demo
 Live Link :

## Features

- **Login Page**  
  Users can log in with the provided Fake Store API credentials. JWT token is stored in localStorage. On successful login, the user is redirected to the home page.

- **Product Listing Page (Home)**  
  Displays a grid of all products fetched from the API. Users can filter by category. Optionally includes a search bar. The layout is responsive and mobile-friendly.

- **Product Detail Page**  
  Clicking a product shows detailed information: image, title, description, and price. Includes an "Add to Cart" button.

- **Cart Page**  
  Users can view all added products, update quantities, or remove items. Total price is calculated and displayed. Clicking "Checkout" clears the cart and shows a success message that disappears after 4 seconds.

- **Navigation/Header**  
  Includes links to Home, Cart, and Logout. Cart icon shows the number of items. Logout clears the token and redirects to the login page.

## Tech Stack

- React.js (with Vite or Create React App)
- React Router v6+
- React Hooks
- Optional: Context API for global cart state
- Plain CSS for styling (mobile-first responsive design)
- Fake Store API for backend data

## Getting Started

1. Clone the repository:

   git clone https://www.github.com/mohitsharma1507/CartShopping.git
   cd Frontend
   npm install
   npm run dev
