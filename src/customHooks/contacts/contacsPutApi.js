import React, { useEffect, useState } from 'react'
import contactsGetApi from './contactsGetApi'
function contacsPutApi(newData) {
  const [data,setData]= useState(newData)
  function putData() {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'X-Master-Key': "$2b$10$y27KltbfXk6AnN2x/2rcc.B0x6m6JtZN6F6ASumnsXBvEbZ7Y87FC"
      }
    })
      .then(res => res.json())
      .then(data1 => console.log(data1))
      .catch(err => console.log(err))

  }
  useEffect(() => {
    putData()
  }, [])

}

export default contacsPutApi