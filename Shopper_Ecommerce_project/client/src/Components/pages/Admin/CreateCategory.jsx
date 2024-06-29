import React from 'react'
import Layout from '../../layouts/Layout'
import AdminMenu from '../../layouts/AdminMenu'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import CategoryForm from '../../Forms/CategoryForm'
import { Modal } from 'antd';


const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);

    const [updatedName, setUpdatedName] = useState("");
    const [selected, setSelected] = useState(null);



    const onCategoryCreated = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("/api/v1/emart/category/create-category", { name });
            if (data?.success) {
                getAllCategory()
                toast.success("Category created successfully", {
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
        } catch (error) {
            toast.error("Something went wrong", {
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
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/emart/category/get-all-category")
            if (data?.allCategory) {
                setCategories(data?.allCategory)
                console.log(data.allCategory)
                // toast.success("Category fetched successfully", {
                //     position: "top-center",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                // });
            }
        } catch (error) {
            toast.error(` Something went wrong while fetching category`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    useEffect(() => {
        getAllCategory()
    }, [])

    const onCategoryUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`/api/v1/emart/category/update-category/${selected._id}`, {
                name: updatedName
            });
            if (data?.success) {
                toast.success("Category updated successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                getAllCategory()
                setUpdatedName("");
                setSelected(null);
                setVisible(false)
            }
            else {
                console.log("error occured")
            }
        } catch (e) {
            toast.error("Something went wrong", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    const onDeleteCategory = async (id) => {
        // console.log(selected._id)

        try {
            const { data } = await axios.delete(`/api/v1/emart/category/delete-category/${id}`)
            if (data?.success) {
                toast.success("Category deleted successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                getAllCategory()

            }

        } catch (error) {
            toast.error(' Something went wrong while deleting category', {
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
        <Layout>
            <div className="container-fluid my-5 mx-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9 my-4" style={{ fontWeight: "100 !important" }}>
                        <h4 style={{ fontFamily: "Playfair Display", fontSize: "25px", fontFamily: "Roboto" }}>Manage Category</h4>
                        <CategoryForm onhandleSubmit={onCategoryCreated} value={name} setValue={setName} />
                        <div className='w-60'>
                            <table className='table ' style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}>
                                <thead>
                                    <tr>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        categories.map(c => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td key={c._id}>{c.name}</td>
                                                        <td><button className='btn btn-secondary fs-6 my-1 mx-2' onClick={() => { setVisible(true); setUpdatedName(c.name); setSelected(c) }}>Edit</button>
                                                            <button className="btn btn-danger" onClick={() => onDeleteCategory(c._id)} >Delete</button></td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Modal className='text-center w-60' onCancel={() => { setVisible(false) }} footer={null} visible={visible}>
                            <CategoryForm onhandleSubmit={onCategoryUpdate} value={updatedName} setValue={setUpdatedName} />
                        </Modal>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default CreateCategory


{/* <button className="btn btn-danger" onClick={onDeleteCategory(c._id)}>Delete</button> it will automatically all the categories */ }