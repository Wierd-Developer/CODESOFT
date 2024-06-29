import React from 'react'
import Layout from '../layouts/Layout'
import { useSearch } from '../../context/searchContext'
import { useNavigate } from 'react-router-dom'
const Search = () => {
    const [values, setValues] = useSearch()
    const navigate = useNavigate()
    return (
        <Layout>
            <div className='container my-1 '>
                <h4 className='text-center'>{values?.results?.length >= 1 ? ` ${values?.results?.length} results found` : "No results found"}</h4><br />
                <div className="d-flex flex-wrap ">
                    {values?.results.map((p) => (
                        <div className="card" style={{ width: "14rem", margin: "10px", height: "52vh", lineHeight: "10px" }}>
                            <img src={`/api/v1/emart/product/get-product-photo/${p._id}`} className="card-img-top w-50 mx-auto my-2" alt="..." style={{ height: "24vh" }} />
                            <div className="card-body" >
                                <h5 className="card-title" style={{ fontSize: "18px", fontWeight: "500" }}>{p.name.substring(0, 19)}</h5>
                                <small className="card-text" style={{ fontSize: "15px" }}>{p.description.substring(0, 20)}...</small>
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

export default Search