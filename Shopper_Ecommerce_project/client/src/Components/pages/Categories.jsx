import React, { useState, useEffect } from 'react'
import Layout from '../layouts/Layout'
import useCategory from '../Hooks/useCategory'
import { NavLink } from 'react-router-dom'


const Categories = () => {
    const categories = useCategory()
    return (
        <Layout>
            <div className="container my-3">
                <div className="row">
                    <ul className="list-group dashboard-menu py-3 mx-3 " style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}>
                        <h4 className='text-center my-3'>All Categories</h4>
                        <div className='my-3'>
                            {categories?.map((c) => (
                                <li className="list-group-item  list-group-item-action "><NavLink className="nav-link" to={`/products-category/${c.slug}`} >{c.name}</NavLink></li>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>

        </Layout>
    )
}

export default Categories