import React, { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'
import { useCard } from '../../context/useCart'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import '../Style/cart.scss'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [productQuantity, setProductQuantity] = useState(1)
    const [cart, setCart] = useCard()
    const navigate = useNavigate()
    let deliveryCharges = 50

    const increaseQuantity = () => {
        let qty = productQuantity + 1
        setProductQuantity(qty)

    }
    const decreaseQuantity = () => {
        if (productQuantity === 1) return

        let qty = productQuantity - 1
        setProductQuantity(qty)
        // updatePrice
    }
    const totalPrice = () => {
        let total = 0
        cart.map((p) => {
            total = total + p.price

        })
        return total
        // console.log(total)

    }
    const removeItem = (pid) => {

        let myCart = [...cart]
        const index = myCart.findIndex((item) => item._id === pid)
        myCart.splice(index, 1)
        setCart(myCart)
        localStorage.setItem("cart", JSON.stringify(myCart))
        // console.log(pid)
    }

    return (
        <Layout>
            <div className='container-fluid' style={{ background: "#f1f3f6" }}>
                <div className="row m-2">
                    <div className="col-md-8 my-3">
                        {cart.map((c) =>
                            <Card sx={{ minWidth: 275, margin: 0.5 }}>
                                <CardContent sx={{ display: "flex" }}>
                                    <Box>
                                        <img src={`/api/v1/emart/product/get-product-photo/${c._id}`} width={120} height={130} alt="" />
                                        <Box sx={{ display: "flex", marginTop: 2, gap: -2 }}>


                                            <CiCirclePlus onClick={increaseQuantity} style={{ fontSize: 25 }} />


                                            <Box sx={{ border: "1.5px solid gray", width: 38, height: 26, display: "flex", justifyContent: "center", alignItems: "center", border: "none" }}>
                                                <h6 sx={{ fontWeight: 200 }}>{productQuantity}
                                                </h6>
                                            </Box>

                                            <CiCircleMinus onClick={decreaseQuantity} style={{ fontSize: 25, marginRight: 15 }} />

                                            <Box style={{ marginLeft: 4 }}>
                                                <h6 onClick={() => removeItem(c._id)} style={{ cursor: "pointer" }}>Remove</h6>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="my-2" sx={{ marginLeft: -1 }}>
                                        <h5>{c.name}</h5>
                                        <h6 style={{ opacity: 0.8, fontWeight: 400 }}>{c.description}</h6>
                                        <h6>$ {c.price * productQuantity}</h6>
                                    </Box>

                                </CardContent>

                            </Card>
                        )}
                    </div>
                    <div className="col-md-4 my-4 " style={{ height: "55vh", backgroundColor: "white" }}>
                        <div className="price-details m-3">
                            <h6 style={{ opacity: 0.7 }}>PRICE DETAILS</h6>
                            <hr style={{ opacity: 0.2 }} />

                            <div style={{ fontSize: "18px" }}>


                            </div>
                            <div className="total-amount my-4">
                                <div >
                                    <h6 style={{ fontWeight: 400 }}>Price ({cart?.length} items):</h6>
                                    <h6 style={{ fontWeight: 400, marginTop: 10 }}>Delivery Charges</h6>
                                    <h5 className="my-4">Total Amount</h5>
                                </div>
                                <div >
                                    <h6>${totalPrice()}</h6>
                                    <h6>$ {deliveryCharges}</h6>
                                    <h5 className='my-4'>$ {deliveryCharges + totalPrice()}</h5>
                                </div>

                            </div>
                            <div className="place-order text-center" >
                                <button><h6>Place Order</h6></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h6>{JSON.stringify(card)}</h6> */}
        </Layout>
    )
}

export default Cart