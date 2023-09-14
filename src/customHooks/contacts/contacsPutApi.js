import React, { useEffect, useState } from 'react'
import contactsGetApi from './contactsGetApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function contacsPutApi(newData) {
  const data = newData
    fetch(import.meta.env.VITE_CONTACT_PUT_API, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'X-Master-Key': `${"$2b$10$y27KltbfXk6AnN2x"+import.meta.env.VITE_CONTACT_GET_API_MASTER}`
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