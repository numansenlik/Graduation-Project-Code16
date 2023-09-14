import { useEffect, useState } from "react";
import axios from "axios";

function contactsGetApi() {
  const [data,setData] = useState([]);
  const [isActive,setIsActive] = useState(false);

async function getData() {
  const options = {
  method:"GET",
  url:import.meta.env.VITE_CONTACT_GET_API,
  headers : {
    'X-Master-Key': `${"$2b$10$y27KltbfXk6AnN2x"+import.meta.env.VITE_CONTACT_GET_API_MASTER}`
  }
  }
  try {
    const response = await axios.request(options);
    await setData(response.data.record);
    await setIsActive(true)
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  getData();
}, []);

return [data,isActive,setData]
}
export default contactsGetApi