import React from 'react'

const CategoryForm = ({ onhandleSubmit, value, setValue }) => {
    return (
        <>
            <form onSubmit={onhandleSubmit}>
                <div className="text-center my-4 w-50 ">
                    <input className="form-control text-end h-50 " type="text"
                        placeholder='Enter new category' value={value} onChange={(e) => setValue(e.target.value)} required />
                    <button type="submit" style={{ fontSize: "12px", }} className="  my-3 mx-4 btn btn-outline-primary">Submit</button>
                </div>

            </form>
        </>
    )
}

export default CategoryForm