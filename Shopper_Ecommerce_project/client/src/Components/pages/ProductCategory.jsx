import React, { useState, useEffect } from 'react'
import Layout from '../layouts/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Style/productCategory.scss'

const ProductCategory = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    const categoryWiseProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/emart/product/product-category/${params.slug}`)
            setCategory(data?.category)
            setProducts(data?.products)
            console.log(data?.category)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (params?.slug) categoryWiseProduct()
    }, [params?.slug])
    return (
        <Layout>
            {/* <h1>
                Category wise products
            </h1>
            <br />
            <h1>{JSON.stringify(category, null, 4)}</h1>
            <h4>{JSON.stringify(products, null, 4)}</h4> */}

            <div className="container products-container  ">
                <h4 className='text-center'>Category: {category?.name}</h4>
                <h6 className='text-center m-3'>{products?.length} products found</h6><br />
                <div className="d-flex flex-wrap ">
                    {products?.map((p) => (
                        <div className="card" style={{ width: "15rem", margin: "10px", height: "55vh", lineHeight: "10px" }}>
                            <img src={`/api/v1/emart/product/get-product-photo/${p._id}`} className="card-img-top my-3 w-50 mx-auto" alt="..." style={{ height: "20vh", aspectRatio: "3/4" }} />
                            <div className="card-body" >
                                <h5 className="card-title" style={{ fontSize: "18px", fontWeight: "500" }}>{p.name.substring(0, 19)}</h5>
                                <small className="card-text" style={{ fontSize: "16px", fontWeight: "400" }}>{p.description.substring(0, 20)}...</small>
                                <h6 className="card-text pt-2">${p.price}</h6>
                                <div className="buttons py-3">
                                    <button className="btn btn-primary ms-2" style={{ fontSize: "12px" }}>Add to cart </button>
                                    <button className="btn btn-outline-secondary" onClick={() => navigate(`/product-details/${p.slug}`)} style={{ fontSize: "12px" }}>More details </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Layout>
    )
}

export default ProductCategory