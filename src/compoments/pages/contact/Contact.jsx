import React from 'react'
import { useState, useEffect } from 'react';
import Comments from '../contact/Comments';
import handleSubmit from '../../../customHooks/contacts/handleSubmit';

function Contact(props) {
  console.log(props);
  const [data, setData] = useState(props.data);
  async function putData(e) {
    const newData = await handleSubmit(e, data)
    setData(newData)
    props.setData(newData)

  }
  useEffect(()=>{
  setData(props.data)
  },[props.isActive])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 ">
            {props.isActive ? <Comments data={data} /> : <h1>Loading...</h1>}
          </div>
          <div className="col-md-6">
            <form className="row g-3 " noValidate onSubmit={putData}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" >Title</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" >Comment</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary p-2">Submit</button>
              </div>

            </form>
          </div>

        </div>
      </div >
    </>
  )
}

export default Contact