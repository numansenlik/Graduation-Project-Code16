import { useEffect, useState } from "react";
import axios from "axios";
function productsApi() {

const [data, setData] = useState([]);

async function productsApi() {
  const options = {
    method: 'GET',
    url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
  };
  try {
    const response = await axios.request(options);
    await setData(response.data);
    console.log(response.data.slice(0,32));
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