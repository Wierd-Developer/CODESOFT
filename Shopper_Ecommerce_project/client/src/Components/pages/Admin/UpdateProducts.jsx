import React from 'react'
import Layout from '../../layouts/Layout'
import AdminMenu from '../../layouts/AdminMenu'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Select, Popconfirm, message, Button } from 'antd'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import { RxUpdate } from "react-icons/rx";


const { Option } = Select;

const UpdateProducts = () => {
    const navigate = useNavigate()
    // const { slug } = useParams()
    const params = useParams()
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [shipping, setShipping] = useState("");
    const [id, setId] = useState("");

    const confirm = async (e) => {
        console.log(e);
        const { data } = await axios.delete(`/api/v1/emart/product/product-delete/${id}`)
        if (data?.success) {
            toast.success("Product deleted successfully", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            navigate("/dashboard/admin/products");
        }

        // message.success('Click on Yes');
    };
    const cancel = (e) => {
        console.log(e);
        // message.error('Click on No');
        navigate("/dashboard/admin/products");

    };

    const getSingleProduct = async () => {
        try {
            // const { slug } = params
            const { data } = await axios.get(`/api/v1/emart/product/single-product/${params.slug}`)
            setName(data.product.slug)
            setId(data.product._id);
            setDescription(data.product.description);
            setPrice(data.product.price);
            setQuantity(data.product.quantity);
            setShipping(data.product.shipping);
            setCategory(data.product.category._id);
            setPhoto(data.product.photo);

        } catch (error) {
            console.log("checking request");
            console.log(error.messages);
        }

    }
    useEffect(() => {
        getSingleProduct()
        // eslint-disable-next-line
    }, [])
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/emart/category/get-all-category")
            if (data?.allCategory) {
                setCategories(data?.allCategory)
                // toast.success("Category fetched successfully", {
                //     position: "top-center",
                //     autoClose: 1000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                // });
            }

        } catch (error) {
            console.log("Something went wrong")
        }
    }
    useEffect(() => {
        getAllCategory()
    }, [])


    const handleUpdate = async (e) => {
        e.preventDefault();
        try {

            const productData = new FormData();
            productData.append("name", name);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("quantity", quantity);
            photo && productData.append("photo", photo);
            productData.append("category", category);
            const { data } = await axios.put(
                `/api/v1/emart/product/update-product/${id}`,
                productData
            );
            if (data?.success) {
                toast.success("Product update successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/dashboard/admin/products");
            }
        } catch (error) {
            console.log(error.messages);
            toast.error("Required fields cannot be empty", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
    // const handleDelete = async () => {
    //     try {
    //         const confirm = (e) => {
    //             console.log(e);
    //             message.success('Click on Yes');
    //         };
    //         const cancel = (e) => {
    //             console.log(e);
    //             message.error('Click on No');
    //         };
    //         const { data } = await axios.delete(`/api/v1/emart/product/product-delete/${id}`)
    //         if (data?.success) {
    //             toast.success("Product deleted successfully", {
    //                 position: "top-center",
    //                 autoClose: 1000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //             })
    //             navigate("/dashboard/admin/products");
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         toast.error("something went wrong");
    //     }
    // }

    return (
        <Layout>
            <div className="container-fluid my-5 mx-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9 my-4" style={{ fontWeight: "100 !important" }}>
                        <h4> Update Products</h4>
                        <div className='mb-3 w-75' >
                            <Select className="form-select mb-3" bordered={false} size="large" showSearch
                                onChange={(value) => { setCategory(value) }} placeholder="Select Category" value={category}>
                                {
                                    categories?.map((c) => (
                                        <Option key={c._id} value={c._id}>
                                            {c.name}
                                        </Option>
                                    ))
                                }
                            </Select>
                            <div className="mb-3">
                                <label className="btn btn-outline-secondary m-0 col-md-12">
                                    {photo ? photo.name : 'Upload Photo'}
                                    <input type="file" name="photo" accept='image/*' onChange={(e) => {
                                        setPhoto(e.target.files[0]);
                                    }} hidden required />
                                </label>
                            </div>
                            <div className="mb-3">
                                {photo ? (
                                    <div className='text-center' >
                                        <img src={URL.createObjectURL(photo)} alt="product_photo" height={'200px'} />
                                    </div>
                                )

                                    : (
                                        <div className='text-center' >
                                            <img src={`/api/v1/emart/product/get-product-photo/${id}`} alt="product_photo" height={'200px'} />
                                        </div>
                                    )}
                            </div>
                            <div className="mb-3 ">
                                <input type="text" className='form-control-outline-none  w-100 px-3' style={{
                                    border: "1px solid #dee2e6", height: "40px", borderRadius: "5px"
                                }} placeholder='write a name' value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} required />
                            </div>
                            <div className="mb-3 ">
                                <input type="number" className='form-control-outline-none  w-100 px-3' style={{
                                    border: "1px solid #dee2e6", height: "40px", borderRadius: "5px"
                                }} placeholder='Price?' value={price} onChange={(e) => {
                                    setPrice(e.target.value)
                                }} required />
                            </div>
                            <div className="mb-3 ">
                                <textarea type="text" className='form-control-outline-none py-3 w-100 px-3' style={{
                                    border: "1px solid #dee2e6", height: "80px", borderRadius: "5px", fontSize: "15px", outline: "none"
                                }} placeholder='Description?' value={description} onChange={(e) => {
                                    setDescription(e.target.value)
                                }} required />
                            </div>
                            <div className="mb-3 ">
                                <input type="number" className='form-control-outline-none  w-100 px-3' style={{
                                    border: "1px solid #dee2e6", height: "40px", borderRadius: "5px"
                                }} placeholder='Quantity?' value={quantity} onChange={(e) => {
                                    setQuantity(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <Select bordered={false} placeholder="Select Shipping " showSearch size="large" className='form-select ' onChange={(value) => {
                                    setShipping(value)
                                }} value={shipping ? "No" : "Yes"}>
                                    <Option value="0">No</Option>
                                    <Option value="1">Yes</Option>
                                </Select>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" onClick={handleUpdate}>
                                    UPDATE PRODUCT <RxUpdate fontSize={"15px"} />
                                </button>
                            </div>
                            <div className="mb-3">
                                <Popconfirm
                                    title="Delete the task"
                                    description="Are you sure to delete this Product?"
                                    onConfirm={confirm}
                                    onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button danger style={{ fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center" }}>Delete</Button>
                                </Popconfirm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default UpdateProducts