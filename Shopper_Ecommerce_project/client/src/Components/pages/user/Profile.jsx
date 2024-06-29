import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout'
import UserMenu from '../../layouts/UserMenu'
import { useAuth } from '../../../context/authContext'
import axios from 'axios'




const Profile = () => {
    const [auth, setAuth] = useAuth()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`/api/v1/emart/auth/profile`, {
                name,
                phone,
                address,
                password
            })
            if (data?.error) {
                alert(data?.error)
            }
            else {
                setAuth({ ...auth, user: data?.updateUser })
                let profilels = localStorage.getItem('auth')
                profilels.JSON.parse(profilels)
                profilels.user = data.updateUser
                localStorage.setItem('auth', profilels.JSON.stringify(profilels))
                alert("profile updated")

            }

        } catch (error) {

        }
    }

    useEffect(() => {
        const { name, email, phone, address } = auth.user
        setName(name)
        setEmail(email)
        setPhone(phone)
        setAddress(address)
    }, [auth?.user])
    return (
        <Layout>
            <div className="container-fluid my-5" style={{ fontFamily: "Poppins, sans-serif", background: "#f1f3f6", minHeight: "80vh" }}>
                <div className="row">
                    <div className="col-md-4">
                        <UserMenu />
                    </div>
                    <div className="col-md-3 my-4" style={{ fontWeight: "100 !important", backgroundColor: "white", height: "60vh", width: "28vw" }}>

                        <form onSubmit={handleUpdate}>

                            <h6 className='text-center my-3'>Account Details</h6>
                            <div className="setName mb-3" >

                                <input type="name " id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                            </div>
                            <div className="setEmail mb-3">
                                <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' disabled />
                            </div>
                            <div className="setPasword mb-3">
                                <input type="text" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                            </div>
                            <div className="setPhone mb-3">

                                <input type="number" id="exampleInputEmail1" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone number' />
                            </div>
                            <div className="setAdress mb-3">

                                <input type="name" id="exampleInputEmail1" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='address' />
                            </div>
                            <div className="updateBtn">

                                <button type="submit" >Update</button>
                            </div>
                        </form>
                    </div>



                </div>
            </div>

        </Layout >

    )
}

export default Profile