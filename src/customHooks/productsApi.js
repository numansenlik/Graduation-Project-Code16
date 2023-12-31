import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
function productsApi() {

  const [data, setData] = useState([]);

  async function productsApi() {
    const options = {
      method: "GET",
      url: import.meta.env.VITE_PRODUCT_GET_API,
      headers: {
        'X-Master-Key': `${"$2b$10$y27KltbfXk6AnN2x" + import.meta.env.VITE_CONTACT_GET_API_MASTER}`
      }
    }
    try {
      const response = await axios.request(options);
      await setData(response.data.record);
    } catch (error) {
      toast.error("Products couldn't be loaded, please refresh the page.")
    }
  }

  useEffect(() => {
    productsApi();
  }, []);

  return data
}

export default productsApi