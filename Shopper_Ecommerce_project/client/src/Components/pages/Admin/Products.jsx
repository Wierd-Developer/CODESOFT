import React, { useState, useEffect } from 'react'
import Layout from '../../layouts/Layout'
import AdminMenu from '../../layouts/AdminMenu'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Products = () => {
    const [products, setProducts] = useState([])

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("/api/v1/emart/product/get-all-product")
            if (data?.products) {
                setProducts(data?.products)
                toast.success(data?.products)
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <Layout>
            <div className="container-fluid my-5 mx-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9 my-4" style={{ fontSize: "15px", width: "130vh" }}>
                        <h4>All Products</h4>
                        <div className="d-flex flex-wrap ">
                            {products.map((p) => (
                                <Link key={p._id} to={`/dashboard/admin/update-product/${p.slug}`} className='text-decoration-none' style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }} >
                                    <div className="card" style={{ width: "12rem", margin: "10px", height: "55vh" }}>
                                        <img src={`/api/v1/emart/product/get-product-photo/${p._id}`} className="card-img-top h-50 w-55 p-2" alt="..." />
                                        <div className="card-body" >
                                            <h5 className="card-title" style={{ fontSize: "16px", fontWeight: "500" }}>{p.name.substring(0, 14)}..</h5>
                                            <p className="card-text">{p.description.substring(0, 18)}</p>
                                            <p className="card-text">${p.price}</p>
                                            <div className='button d-flex  justify-content-center'>
                                                <button className="btn btn-success" >Update</button>
                                            </div>
                                            {/* <Link className="btn btn-primary">Add to cart</Link> */}
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Products