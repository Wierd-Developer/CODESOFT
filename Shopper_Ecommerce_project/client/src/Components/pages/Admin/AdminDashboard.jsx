import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import AdminMenu from '../../layouts/AdminMenu';
import { useAuth } from '../../../context/authContext';

const AdminDashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
            <div className="container-fluid my-5 mx-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9 my-4" style={{ fontWeight: "100 !important" }}>
                        <h4 className='text-primary'>Details:</h4><hr />
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
    )
}

export default AdminDashboard;