import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SearchInput from "../Forms/SearchInput";
import { PiShoppingCartFill } from "react-icons/pi";
import useCategory from "../Hooks/useCategory";
import { SiShopify } from "react-icons/si";
import "../Style/Header.scss";
import { CiUser } from "react-icons/ci";
import { useCard } from "../../context/useCart";
import { Badge } from 'antd';



const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCard()
  const navigate = useNavigate();
  const categories = useCategory();
  const onLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/login");
  };
  return (
    <>
      <nav className="header">
        <div className="wrapper">
          <div className="nav-brand">
            <Link className="navbar-brand" to="/">
              <span className="nav-logo">
                <SiShopify />
              </span>
              SHOPPER
            </Link>
          </div>
          <div className="search-bar">
            <SearchInput />
          </div>
          <div className=" collapse navbar-collapse">
            <ul className="collapse-ul mx-auto">
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink className=" signupBtn1 nav-link" to="/register">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="signupBtn nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <button className="profileBtn">
                      {" "}
                      <CiUser fontSize={"25px"} />
                      <div>Profile</div>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li
                    className="dropdown m-auto ms-2 "
                    style={{ margin: "10px" }}
                  >
                    <NavLink
                      className="nav-link  "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        color: "rgb(83, 82, 82,0.87)",
                        letterSpacing: "1px",
                      }}
                    >
                      Categories
                    </NavLink>
                    <ul
                      className="dropdown-menu text-end my-2"
                      style={{ fontFamily: "poppins", fontSize: "15px" }}
                    >
                      <li>
                        <NavLink

                          className="  dropdown-item "
                          to={"/categories"}
                        >
                          All Categories
                        </NavLink>
                      </li>

                      {categories?.map((c) => (
                        <li>
                          <NavLink
                            style={{ margin: "2px" }}
                            className="  dropdown-item"
                            to={`/products-category/${c.slug}`}
                          >
                            {c.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className=" dropdown">
                    <NavLink
                      className="nav-link "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <button className="profileBtn">
                        <CiUser fontSize={"25px"} />
                        {/* <div>{auth?.user?.name.substring(0, 14)}</div> */}
                        {auth?.user.name.length > 15 ?
                          <div>
                            {auth?.user?.name.substring(0, 14)}..
                          </div> : <div>
                            {auth?.user?.name.substring(0, 14)}
                          </div>}
                      </button>
                    </NavLink>
                    <ul
                      className="dropdown-menu text-end "
                      style={{ fontFamily: "poppins", fontSize: "14px bold" }}
                    >
                      <li>
                        <NavLink
                          onClick={onLogout}
                          className="dropdown-item"
                          to="/"
                        >
                          Logout
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          className="dropdown-item"
                          to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item ms-2 my-1 " style={{ width: "20vh" }}>
                <Badge count={cart?.length} offset={[10, 2]} showZero>
                  {cart?.length === 0 ? (
                    <NavLink
                      className="nav-link "
                      style={{ color: "rgb(83, 82, 82,0.87)", fontWeight: 500 }}
                      to="/login"

                    >
                      <PiShoppingCartFill
                        fontSize={"24px"}
                        color="rgb(83, 82, 82)"
                      />{" "}
                      Cart
                    </NavLink>

                  ) : (
                    <NavLink
                      className="nav-link "
                      style={{ color: "rgb(83, 82, 82,0.87)", fontWeight: 500 }}
                      to="/cart"

                    >
                      <PiShoppingCartFill
                        fontSize={"24px"}
                        color="rgb(83, 82, 82)"
                      />{" "}
                      Cart
                    </NavLink>
                  )}

                </Badge>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="categoty-list my-5 py-3">
        <div>
          {categories?.map((c) => (
            <li className="category-items ">
              <Link className="nav-link" to={`/products-category/${c.slug}`}>
                {c.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;

/* here not getting role i.e got nothing in /dashboard page in user make sure to add role field in the auth controller while creating login controller */
// {
/* <div className="collapsee">
            <ul className="navbar-input">
              
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  <ImHome fontSize={"20px"} />
                </NavLink>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link " data-bs-toggle="dropdown">
                      <button>{auth?.user?.name[0]}</button>
                    </NavLink>
                    <ul
                      className="dropdown-menu text-center"
                      style={{ fontFamily: "poppins", fontSize: "14px bold" }}
                    >
                      <li>
                        <NavLink
                          onClick={onLogout}
                          className="dropdown-item"
                          to="/login"
                        >
                          Logout
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          className="dropdown-item"
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* category dropdown */
//}

//   <li
//     className="nav-item dropdown m-auto ms-2"
//     style={{ margin: "10px" }}
//   >8
//     <NavLink className="nav-link " data-bs-toggle="dropdown">
//       Categories
//     </NavLink>
//     <ul
//       className="dropdown-menu text-center my-2"
//       style={{ fontFamily: "poppins", fontSize: "15px" }}
//     >
//       <li>
//         <NavLink
//           style={{ margin: "2px", padding: "2px" }}
//           className="  dropdown-item"
//           to={"/categories"}
//         >
//           All Categories
//         </NavLink>
//       </li>

//       {categories?.map((c) => (
//         <li>
//           <NavLink
//             style={{ margin: "2px" }}
//             className="  dropdown-item"
//             to={`/products-category/${c.slug}`}
//           >
//             {c.name}
//           </NavLink>
//         </li>
//       ))}
{
  /* <li ><NavLink style={{ zIndex: "10 !important", margin: "2px" }} className="  dropdown-item" to={"/logn"} >Action</NavLink>
                                                  </li>  make sure u provind different to={} to every dropdown list otherwise it will all blue */
}
//         </ul>
//       </li>
//     </>
//   )}
//   <li className="nav-item ms-2 my-1 " style={{ width: "20vh" }}>
//     <NavLink className="nav-link" to="/cart">
//       <PiShoppingCartFill
//         fontSize={"24px"}
//         color="rgb(83, 82, 82)"
//       />{" "}
//       Cart({0})
//     </NavLink>
//   </li>
// </ul>
//</div>
