import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminMenu = () => {
    return (
        <>
            <ul className="list-group dashboard-menu py-3 mx-3 text-center" style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}>
                <NavLink className="mx-4 text-decoration-none" to="/dashboard/admin"><h3>Admin Panel</h3></NavLink>

                <li className="list-group-item  list-group-item-action"><NavLink className="nav-link" to="/dashboard/admin/create-category">Create Category</NavLink></li>

                <li className="list-group-item list-group-item-action"><NavLink className="nav-link" to="/dashboard/admin/create-products">Create Products</NavLink></li>

                <li className="list-group-item list-group-item-action"><NavLink className="nav-link" to="/dashboard/admin/products">All Products</NavLink></li>

                <li className="list-group-item list-group-item-action"><NavLink className="nav-link" to="/dashboard/admin/all-users">All USers</NavLink></li>

            </ul>
        </>
    )
}

export default AdminMenu