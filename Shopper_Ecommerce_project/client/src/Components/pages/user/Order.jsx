import React from 'react'
import UserMenu from '../../layouts/UserMenu'
import Layout from '../../layouts/Layout'

const Order = () => {
    return (
        <Layout>
            <div className="container-fluid my-5 mx-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9 my-4" style={{ fontWeight: "100 !important" }}>
                        <h4>My Orders</h4>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Order