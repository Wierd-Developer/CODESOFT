import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
    return (
        <>
            <ul className="list-group dashboard-menu py-3 mx-3 text-center" style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}>
                <NavLink className="mx-4 text-decoration-none" to="/dashboard/user"><h3>Dashboard</h3></NavLink>
                <li className="list-group-item  list-group-item-action"><NavLink className="nav-link" to="/dashboard/user/profile">Profile</NavLink></li>
                <li className="list-group-item list-group-item-action"><NavLink className="nav-link" to="/dashboard/user/orders">My Orders</NavLink></li>

            </ul>
        </>
    )
}
export default UserMenu