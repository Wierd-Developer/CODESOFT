import React, { useState } from 'react'
import Layout from '../../layouts/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../../context/authContext';
import { useLocation } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth("");
    const location = useLocation();

    const onLogin = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post("/api/v1/emart/auth/login", { email, password });
            if (res && res.data.success) {

                toast.success("Login Successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || '/')
            }
            else {
                console.error("something went wrong")
            }
        } catch (error) {
            console.log(error);
            toast.error('Wrong username or password', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }

    }
    return (
        <>
            <Layout>
                <div className='login-page' >
                    <form className='login-form' onSubmit={onLogin}>
                        <h6>Login to your account</h6>
                        <div className="setEmail">

                            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required />
                        </div>
                        <div className="setPasword">

                            <input type="password" id="exampleInputPassword1" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' required />
                        </div>
                        <button type="submit" className="myBtn">Login</button>
                        <div className="forgot-password">
                            <Link to="/forgot-password" >Forgot password?</Link>
                        </div>
                    </form>
                </div>
            </Layout>
        </>

    )
}

export default Login