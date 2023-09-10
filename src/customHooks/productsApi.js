import { useEffect, useState } from "react";
import axios from "axios";
function productsApi() {

const [data, setData] = useState([]);

async function productsApi() {
  const options = {
    method:"GET",
    url:"https://api.jsonbin.io/v3/b/64eca8658e4aa6225ed663e8",
    headers : {
      'X-Master-Key': '$2b$10$y27KltbfXk6AnN2x/2rcc.B0x6m6JtZN6F6ASumnsXBvEbZ7Y87FC'
    }
    }
    try {
      const response = await axios.request(options);
      await setData(response.data.record);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

useEffect(() => {
  productsApi();
}, []);

return data
}

export default productsApi