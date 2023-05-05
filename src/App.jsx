import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/admin/mainLayout/MainLayout";
import Dashboard from "./components/admin/dashboard/Dashboard";
import ProductList from "./components/admin/productsList/ProductList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="product-list" element={<ProductList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
