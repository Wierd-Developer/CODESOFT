import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useAuth } from '../../../context/authContext';
import Spinner from '../../Spinner';
import { Outlet } from 'react-router-dom';


const AdminRoute = () => {
    const [auth] = useAuth();
    const [ok, setOk] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
            // const res = await axios.get("/api/v1/emart/auth/admin-auth", {
            //     headers: {
            //         Authorization: auth?.token
            //     }
            // });
            const res = await axios.get("/api/v1/emart/auth/admin-auth");
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        if (auth?.token) {
            checkAuth();
        }

    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner path="" />
}

export default AdminRoute;