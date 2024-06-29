import React, { useState, useEffect } from 'react'
import Layout from '../layouts/Layout'
import { useSearch } from '../../context/searchContext'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PiShoppingCartFill } from "react-icons/pi";
import { AiFillThunderbolt } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'


const ProductDetails = () => {
    // const [values, setValues] = useSearch()
    const params = useParams()
    const [products, setProducts] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (params?.slug) getSingleProduct();
    }, [params?.slug]);

    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/emart/product/single-product/${params.slug}`)
            setProducts(data?.product)
            // console.log(data?.product.category._id, data?.product._id)
            getSimilarProducts(data?.product._id, data?.product.category._id)
            // console.log("calledsimilar")

        } catch (error) {
            console.log(error)
        }
    }
    const getSimilarProducts = async (pid, cid) => {
        try {
            // console.log("pid and cid", pid, cid)
            const { data } = await axios.get(`/api/v1/emart/product/similar-product/${pid}/${cid}`)
            // console.log("setting product")
            setSimilarProducts(data?.product)
        } catch (error) {
            console.log(error.messages)
        }
    }

    return (
        <>
            <Layout>
                <div className="container my-4 py-4" >
                    <div className="row">
                        <div className="col-md-6 ">
                            <img src={`/api/v1/emart/product/get-product-photo/${products._id}`} className="card-img-top m-2 p-2" alt="..." style={{ height: "60vh", width: "50vh" }} />
                        </div>
                        <div className="col-md-6 my-4 py-3 d-flex justify-content-center ">
                            <div className="d-flex flex-wrap ">
                                <div className="my-5" style={{ width: "25rem", margin: "10px", height: "43vh" }}>
                                    <div className="card-body" >
                                        <h5 className="card-title" style={{ fontSize: "26px", fontWeight: "500" }}>{products.name}</h5>
                                        <small className="card-text" style={{ fontSize: "18px" }}>{products.description}...</small>
                                        <h5 className='pt-4' style={{ color: "green" }}>Special price</h5>
                                        <h5 className="card-text pt-1 ">${products.price}</h5>
                                        <div className="buttons py-1">
                                            <button className="btn btn-primary ms-4" style={{ fontSize: "14px" }}><PiShoppingCartFill fontSize={"20px"} /> Add to cart </button>
                                            <button className="btn btn-warning ms-4" style={{ fontSize: "15px" }}><AiFillThunderbolt fontSize={"20px"} color='white' /> Buy now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <h4 className="my-3 mx-5" style={{ fontFamily: "poppins" }}>Similar products</h4>
                    {/* <h3>{JSON.stringify(similarProducts, null, 4)}</h3> */}
                    <div className="container text-center ">
                        <div className="d-flex flex-wrap " style={{ fontSize: "20px", fontWeight: "100" }}>

                            {similarProducts?.length < 1 ?
                                (<p className='text-center' style={{ margin: "auto", fontFamily: "poppins", fontWeight: "100" }}>No similar products
                                </p>) :
                                similarProducts?.map((p) => (
                                    <div className="card" style={{ width: "13rem", margin: "10px" }}>
                                        <img src={`/api/v1/emart/product/get-product-photo/${p._id}`} className="card-img-top p-2" alt="..." style={{ height: "20vh", width: "18vh" }} />
                                        <div className="card-body" >
                                            <h5 className="card-title" style={{ fontSize: "17px", fontWeight: "500", fontFamily: "Playfair" }}>{p.name.substring(0, 17)}</h5>
                                            <small className="card-text" style={{ fontSize: "14px", fontWeight: "400" }}>{p.description.substring(0, 18)}...</small>
                                            <h6 className="card-text ">${p.price}</h6>
                                            <div className="buttons py-3">
                                                <button className="btn btn-primary ms-2" style={{ fontSize: "10px" }}>Add to cart </button>
                                                <button className="btn btn-outline-secondary" onClick={() => navigate(`/product-details/${p.slug}`)} style={{ fontSize: "10px" }}>More details </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>



            </Layout >
        </>

    )
}

export default ProductDetails