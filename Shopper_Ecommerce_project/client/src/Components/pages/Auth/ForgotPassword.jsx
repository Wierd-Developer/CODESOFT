import React, { useState } from 'react'
import Layout from '../../layouts/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../../context/authContext';
import { useLocation } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth("");
    const location = useLocation();

    const onForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/emart/auth/forgot-password", { email, answer, newPassword })
            if (res && res.data.success) {
                toast.success("Password Reset successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/login')
            }
            else {
                toast.error("Something went wrong", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        } catch (error) {
            console.log(error.messages);
        }

    }
    return (
        <>
            <Layout>
                <div className='login-page' >
                    <form className='login-form' onSubmit={onForgotPassword}>
                        <h6>Reset your Password</h6>
                        <div className="setEmail">
                            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required />
                        </div>

                        <div className="setAnswer">
                            <input type="password" id="exampleInputPassword1" className="form-control" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='Enter Secret Answer' required />
                        </div>

                        <div className="setNePasword">
                            <input type="password" id="exampleInputPassword1" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter Password' required />
                        </div>
                        <button type="submit" className="myBtn">Submit</button>
                    </form>
                </div>
            </Layout>
        </>

    )
}

export default ForgotPassword;