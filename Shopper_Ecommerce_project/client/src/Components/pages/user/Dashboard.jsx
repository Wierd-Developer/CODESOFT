import React from 'react'
import Layout from '../../layouts/Layout'
import UserMenu from '../../layouts/UserMenu'
import { useAuth } from '../../../context/authContext'

const Dashboard = () => {
    const [auth] = useAuth();
    return (
        <>
            <Layout >
                <div className="container-fluid my-5 " style={{ fontFamily: "Poppins, sans-serif", background: "#f1f3f6", minHeight: "80vh" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <UserMenu />
                        </div>
                        <div className="col-md-8 my-4 py-3" style={{ fontWeight: "100 !important" }}>
                            <div className="cards">
                                <h5>Name : {auth?.user?.name}</h5>
                                <h5>Email : {auth?.user?.email}</h5>
                                <h5>Phone : {auth?.user?.phone}</h5>
                                <h5>Address : {auth?.user?.address}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default Dashboard