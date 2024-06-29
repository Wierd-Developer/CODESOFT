import React, { useState } from 'react'
import Layout from '../../layouts/Layout';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const data = { name, email, password, phone, address, answer };
        // console.log(JSON.stringify(data));
        // axios.post(`/api/v1/emart/auth/user/user-registration`, { name, email, password, phone, address, answer }).then(response => response.json).catch(error => console.log(error));


        // console.log(process.env.REACT_APP_URL)
        try {
            const res = await axios.post(`/api/v1/emart/auth/user-registration`, { name, email, password, phone, address, answer });
            if (res && res.data.success) {
                toast.success("Registered Successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/login')
            }

        } catch (error) {
            console.log(error)

        }

    }

    return (
        <>
            <Layout>
                <div className="register-page">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <h6 className='text-center my-3'>Create a new account</h6>
                        <div className="setName">

                            <input type="name" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' required />
                        </div>
                        <div className="setEmail">
                            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required />
                        </div>
                        <div className="setPasword">
                            <input type="password" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' required />
                        </div>
                        <div className="setPhone">

                            <input type="number" id="exampleInputEmail1" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone number' required />
                        </div>
                        <div className="setAdress">

                            <input type="name" id="exampleInputEmail1" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='address' required />
                        </div>
                        <div className="setAnswer">

                            <input type="name" id="exampleInputEmail1" placeholder='What is your favourite sports' value={answer} onChange={(e) => setAnswer(e.target.value)} required />
                        </div>
                        <button type="submit" className="myBtn">Register</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Register