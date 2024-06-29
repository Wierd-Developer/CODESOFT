import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Policy from "./Components/pages/Policy";
import PageNotFound from "./Components/pages/PageNotFound";
import Login from "./Components/pages/Auth/Login";
import Register from "./Components/pages/Auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/pages/user/Dashboard";
import ProtectedRoutes from "./Components/pages/Routes/ProtectedRoutes";
import ForgotPassword from "./Components/pages/Auth/ForgotPassword";
import AdminRoute from "./Components/pages/Routes/AdminRoute";
import AdminDashboard from "./Components/pages/Admin/AdminDashboard";
import CreateCategory from "./Components/pages/Admin/CreateCategory";
import CreateProducts from "./Components/pages/Admin/CreateProducts";
import Users from "./Components/pages/Admin/Users";
import Profile from "./Components/pages/user/Profile";
import Order from "./Components/pages/user/Order";
import Products from "./Components/pages/Admin/Products";
import UpdateProducts from "./Components/pages/Admin/UpdateProducts";
import Search from "./Components/pages/search";
import ProductDetails from "./Components/pages/ProductDetails";
import ProductCategory from "./Components/pages/ProductCategory";
import Categories from "./Components/pages/Categories";
import Cart from "./Components/pages/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product-details/:slug" element={<ProductDetails />} />
        <Route path="/products-category/:slug" element={<ProductCategory />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Order />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-products" element={<CreateProducts />} />
          <Route path="admin/products" element={<Products />} />
          <Route
            path="admin/update-product/:slug"
            element={<UpdateProducts />}
          />
          <Route path="admin/all-users" element={<Users />} />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
