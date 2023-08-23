import { useEffect, useState } from "react";
import axios from "axios";

function contactsGetApi() {
  const [data,setData] = useState([]);
  const [isActive,setIsActive] = useState(false);

async function getData() {
  const options = {
  method:"GET",
  url:"https://api.jsonbin.io/v3/b/64dad76a9d312622a3914d1e",
  headers : {
    'X-Master-Key': '$2b$10$y27KltbfXk6AnN2x/2rcc.B0x6m6JtZN6F6ASumnsXBvEbZ7Y87FC'
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