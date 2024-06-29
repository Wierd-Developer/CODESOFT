import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <h1>{props.children}</h1>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
