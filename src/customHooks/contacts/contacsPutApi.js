import React, { useEffect, useState } from 'react'
import contactsGetApi from './contactsGetApi'
function contacsPutApi(newData) {
  const data = newData
    fetch("https://api.jsonbin.io/v3/b/64dad76a9d312622a3914d1e", {
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

export default contacsPutApi