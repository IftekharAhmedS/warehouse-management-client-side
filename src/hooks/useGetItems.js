import axios from "axios";
import { useEffect, useState } from "react"

const useGetItems = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get('http://localhost:5000/items', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessKey')}`
                }
            });
            setItems(data)
        }
            getItems()
    }, [])
    
    return [items]
}
export default useGetItems;