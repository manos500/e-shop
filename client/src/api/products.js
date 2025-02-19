import axios from "axios"

export const fetchProduct = async () => {
    const response = await axios.get("http://localhost:5500/api");
    return response.data.PRODUCTS
   
    
}