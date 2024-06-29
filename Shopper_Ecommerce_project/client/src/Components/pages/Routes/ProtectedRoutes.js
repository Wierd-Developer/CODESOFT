import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useAuth } from '../../../context/authContext';
import { Outlet } from 'react-router-dom';
import Spinner from '../../Spinner';

const ProtectedRoutes = () => {
    const [auth, setAuth] = useAuth();
    const [ok, setOk] = useState(false);


    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get("/api/v1/emart/auth/user-auth", {
                headers: {
                    Authorization: auth?.token
                }
            });
            if (res.data.ok) {
                setOk(true);
            }
            else {
                setOk(false);
                console.log("tken error")
            }
        }
        if (auth?.token) {
            authCheck();
        }

    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner />
}

export default ProtectedRoutes