import { useEffect, useState } from "react";
import axios from "axios";

function contactsGetApi() {
  const [data,setData] = useState([]);

function getData() {
  const url = `https://api.jsonbin.io/v3/b/64dad76a9d312622a3914d1e`;
  axios.get(url, {
    headers: {
      'X-Master-Key': "$2b$10$y27KltbfXk6AnN2x/2rcc.B0x6m6JtZN6F6ASumnsXBvEbZ7Y87FC",
    }
  })
    .then(response => {
      setData(response.data.record);
      console.log(response.data.record);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

useEffect(() => {
  getData();
}, []);
return data
}
export default contactsGetApi