import React, { useState, useEffect } from 'react';
import Layout from "../layouts/Layout";
import axios from 'axios'
import { Checkbox, Radio } from 'antd';
import { Prices } from '../Price';
import { useNavigate } from 'react-router-dom';
import '../Style/Home.scss'
import Carousal from '../Carousal';
import { IoArrowForwardOutline } from "react-icons/io5";
import { useCard } from '../../context/useCart';

// import { useContext } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [checked, SetChecked] = useState([])
    const [radio, setRadio] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const [cart, setCart] = useCard()
    // const useAuth = useContext();

    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/emart/category/get-all-category")
            if (data?.allCategory) {
                setCategories(data?.allCategory)

            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllCategory()
        getTotal()

    }, [])

    const getAllProducts = async () => {
        try {
            // const { data } = await axios.get("/api/v1/emart/product/get-all-product")
            setLoading(true)
            const { data } = await axios.get(`/api/v1/emart/product/product-list/${page}`)
            setLoading(false)


            setProducts(data?.products)
            // toast.success(data?.product)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    const getTotal = async () => {
        try {
            const { data } = await axios.get("/api/v1/emart/product/product-count");
            setTotal(data?.total)
            console.log(data.total)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        if (page === 1) return;
        loadMore()
    }, [page])

    const loadMore = async () => {
        try {//copy
            // const { data } = await axios.get("/api/v1/emart/product/get-all-product")
            setLoading(true)
            const { data } = await axios.get(`/api/v1/emart/product/product-list/${page}`)
            setLoading(false)

            setProducts([...products, ...data?.products])
            // setProducts(data?.products)
            // toast.success(data?.product)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    const handleFilter = (value, id) => {
        let all = [...checked]
        if (value) {
            all.push(id)
        }
        else {
            all = all.filter((c) => c !== id)
        }
        SetChecked(all)
    }


    useEffect(() => {
        if (!checked.length || !radio.length) getAllProducts()
    }, [checked.length, radio.length])

    const filterProducts = async () => {
        try {
            const { data } = await axios.post("/api/v1/emart/product/product-filter", { checked, radio })
            setProducts(data?.products)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (checked.length || radio.length) filterProducts()
    }, [checked, radio])
    return (
        <>
            <Layout>
                <div className="container-fluid products  my-5 " style={{ fontFamily: "Poppins, sans-serif" }}>
                    <Carousal />
                    <div className="hero-headline">
                        <h5>
                            Get The Best Product
                            <br />
                            &nbsp; &nbsp;&nbsp; At Your Home
                        </h5>
                        <div className="trends">
                            <button className="trend-button">
                                Latest Collections
                                <IoArrowForwardOutline style={{ fontSize: "20px" }} />
                            </button>
                        </div>
                    </div>
                    <br />
                    {/* <h5>{JSON.stringify(checked, null, 4)}</h5> */}
                    {/* <h5>{JSON.stringify(radio, null, 4)}</h5> */}
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className='d-flex flex-column mx-5 my-4'>
                                <h5>Filter by category</h5>
                                {categories.map((c) => (

                                    <Checkbox style={{ fontSize: "14px", fontWeight: "400" }} onChange={(e) => handleFilter(e.target.checked, c._id)}>{c.name}</Checkbox>

                                ))}
                            </div>

                            <div className=" d-flex flex-column mx-5 my-4">
                                <h5>Filter by price</h5>
                                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                                    {Prices.map((p) => (
                                        <div>
                                            <Radio style={{ fontSize: "14px", fontWeight: "400" }} value={p.array} >{p.name}</Radio>
                                        </div>
                                    ))}
                                </Radio.Group>
                            </div>
                            <div className=" d-flex flex-column mx-5 col-md-7 ">
                                <button className="btn btn-warning" onClick={() => window.location.reload()}>Clear filter</button>

                            </div>
                        </div>

                        <div className="container col-md-8  my-4" style={{ fontSize: "15px" }}>

                            {/* //card */}

                            <div className="d-flex flex-wrap ">
                                {products?.map((p) => (
                                    <div className="card" style={{ width: "15rem", margin: "10px" }}>
                                        <img src={`/api/v1/emart/product/get-product-photo/${p._id}`} className="card-img-top mx-auto p-2" alt="..." style={{ height: "20vh", width: "10vw" }} />
                                        <div className="card-body" >
                                            <h5 className="card-title" style={{ fontSize: "16px", fontWeight: "500" }}>{p.name.substring(0, 19)}</h5>
                                            <small className="card-text">{p.description.substring(0, 20)}...</small>
                                            <h6 className="card-text pt-2">${p.price}</h6>
                                            <div className="buttons py-3">
                                                <button className="btn btn-primary ms-2" style={{ fontSize: "12px" }} onClick={() => {
                                                    setCart([...cart, p])
                                                    localStorage.setItem("cart", JSON.stringify([...cart, p]))
                                                }}>Add to cart </button>
                                                <button className="btn btn-outline-secondary" onClick={() => navigate(`/product-details/${p.slug}`)} style={{ fontSize: "12px" }}>More details </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='my-3 mx-3' >
                                {products && products.length === 0 ? (" ") : products && products.length < total && (
                                    <button className='btn btn-warning' onClick={(e) => {
                                        e.preventDefault();
                                        setPage(page + 1)
                                        console.log(products.length)
                                    }}>
                                        {loading ? "Loading..." : "Load more"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Home