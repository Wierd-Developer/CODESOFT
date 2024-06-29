import React from 'react'
import Layout from '../../layouts/Layout'
import AdminMenu from '../../layouts/AdminMenu'

const Users = () => {
    return (
        <Layout>
            <div className="container-fluid my-5 mx-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9 my-4" style={{ fontWeight: "100 !important" }}>
                        <h4>All Users</h4>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Users