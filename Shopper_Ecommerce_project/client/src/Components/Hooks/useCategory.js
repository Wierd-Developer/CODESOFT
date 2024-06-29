import { useState, useEffect } from 'react'
import axios from 'axios'

const useCategory = () => {
    const [categories, setCategories] = useState([])

    const getAllCategories = async () => {
        try {
            const { data } = await axios.get("/api/v1/emart/category/get-all-category");
            setCategories(data?.allCategory)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getAllCategories()
    }, [])
    return categories
}

export default useCategory