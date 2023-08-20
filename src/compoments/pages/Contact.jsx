import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import contactsGetApi from '../../customHooks/contacts/contactsGetApi';
import contacsPutApi from '../../customHooks/contacts/contacsPutApi';
import Comments from './Comments';

function Contact(props) {
  console.log(props);
  let [data, setData] = useState(props.data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const newData = [...data, {
      id: data.length + 1,
      name: `${e.target[1].value} ${e.target[2].value}`,
      email: e.target[0].value,
      comment: {
        title: e.target[3].value,
        text: e.target[4].value
      }
    }];
    e.target.reset();
    contacsPutApi(newData)
    setData(newData)


  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 ">
            {props.isActive ? <Comments data= {data}/>:<h1>Loading...</h1>}
          </div>
          <div className="col-md-6">
            <form className="row g-3 was-validated" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">

                <div class="input-group">
                  <span class="input-group-text">First and last name</span>
                  <input type="text" aria-label="First name" class="form-control"/>
                    <input type="text" aria-label="Last name" class="form-control"/>
                    </div>

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
                  <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
          </div>

        </div>
      </div >
    </>
  )
}

export default Contact