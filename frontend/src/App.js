import React from "react";
import Login from "./Components/LogInOut/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/LogInOut/Signup";
import AppBarSec from "./Components/AppBar/AppBarSec";
import Products from "./Components/Products/Products";
import Admin from "./Components/Admin/Admin";
import ProductSec from "./Components/Admin/ProductSec";
import AddProduct from "./Components/Admin/AddProduct";
import UpdateAdmin from "./Components/Admin/UpdateAdmin";
import UserQuery from "./Components/Admin/UserQuery";
import ReplyQuery from "./Components/Admin/ReplyQuery";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBarSec />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/productmanage" element={<ProductSec />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route path="/update/:uid" element={<UpdateAdmin />} />
          <Route path="/userquery" element={<UserQuery />} />
          <Route path="/queryreply/:rid" element={<ReplyQuery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
