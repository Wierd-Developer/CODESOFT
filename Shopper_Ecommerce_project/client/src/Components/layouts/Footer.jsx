import React from "react";
import "../Style/Footer.scss";
import youtube from "../../Assets/youtube.png";
import linkedin from "../../Assets/linkedin.png";
import telegram from "../../Assets/Telegram.png";
import { SiShopify } from "react-icons/si";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="link-div" style={{ gap: "50vh" }}>
                <div className="link-img">
                    <img src={youtube} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={telegram} alt="" />
                </div>
            </div>
            <div className="footer-div">
                <div className="services ">
                    <div className="footer-logo">
                        <SiShopify alt="" style={{ fontSize: "3rem", margin: "auto" }} />

                        <h4
                            style={{
                                marginTop: "10px",
                                fontWeight: "700",
                                fontSize: "20px",
                                fontFamily: "sans-serif",
                                opacity: "1",
                                color: "#fff",
                            }}
                        >
                            SHOPPER
                        </h4>
                        <p
                            style={{
                                fontSize: "1rem",
                                fontWeight: "500",
                                color: "#fff",
                                letterSpacing: "1.2px",
                                fontFamily: "poppins",
                            }}
                        >
                            The Ultimate Shopping App <br />
                            With Latest Collections
                        </p>
                    </div>
                    <div className="footer-menu">
                        <p style={{ fontWeight: "700", fontFamily: "sans-serif" }}>MENU</p>
                        <p className="my-1">About Us</p>
                        <p className="my-1">Contact Us</p>
                        <p className="my-1">Collections</p>
                    </div>
                    <div className="footer-menu">
                        <p style={{ fontWeight: "700", fontFamily: "sans-serif" }}>
                            SERVICES
                        </p>
                        <p className="my-1">PrivacyPolicy</p>
                        <p className="my-1">Terms of use</p>
                        <p className="my-1">Collections</p>
                    </div>
                </div>
                <div
                    className="serve-id my-5 py-4"
                    style={{
                        borderLeft: "0.1px solid rgba(192, 188, 188, 0.589)",
                        paddingLeft: "2vw",
                    }}
                >
                    <div
                        className="footer-menu "
                        style={{
                            fontWeight: "700",
                            fontFamily: "sans-serif",
                            fontSize: "16px",
                        }}
                    >
                        GET IN TOUCH
                    </div>
                    <p style={{ color: "white" }}>Satpalcoder@gmail.com</p>
                    {/* <hr style={{ color: "white" }} /> */}
                </div>
                {/* <hr style={{ color: "white", width: "100%" }} /> */}
                <div
                    className="copyright "
                    style={{
                        borderTop: "0.1px solid rgba(192, 188, 188, 0.589)",
                        width: "150%",
                    }}
                >
                    {/* <hr style={{ width: "145%", color: "#fff" }} /> */}
                    <p style={{ color: "white", textAlign: "center", margin: "20px" }}>
                        Copyright &copy; 2024 Sorting Shopper Pvt Ltd. All rights are
                        reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
