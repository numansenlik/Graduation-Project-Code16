import React, { useEffect, useState } from 'react'
import contactsGetApi from './contactsGetApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      .then(data1 => {
        toast.success('Form submitted successfully!', {
          position: 'top-right',
          autoClose: 3000, // 3 saniye sonra otomatik olarak kapanacak
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(err =>     toast.error('An error occurred while submitting the form.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }))

}

export default contacsPutApi