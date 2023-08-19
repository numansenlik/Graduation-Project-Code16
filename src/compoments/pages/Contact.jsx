import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import contactsGetApi from '../../customHooks/contacts/contactsGetApi';
import contacsPutApi from '../../customHooks/contacts/contacsPutApi';

function Contact({contactsData}) {
  let [data,setData] = useState(contactsData);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const secretKey = "$2b$10$y27KltbfXk6AnN2x/2rcc.B0x6m6JtZN6F6ASumnsXBvEbZ7Y87FC";
  const apiUrl = 'https://api.jsonbin.io/v3/b/64dad76a9d312622a3914d1e';


    const handleSubmit = async (e) => {
      e.preventDefault();
      const newData = await [...data,{
        id: data.length + 1 ,
        name: `${name} ${surname}`,
        email: email,
        comment: {
          title: title,
          text: comment
        }
      }];
      await fetch(apiUrl, {
        method: "PUT",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
          'X-Master-Key': "$2b$10$y27KltbfXk6AnN2x/2rcc.B0x6m6JtZN6F6ASumnsXBvEbZ7Y87FC"
        }
      })
        .then(res => res.json())
        .then(data1 => console.log(data1))
        .catch(err => console.log(err))
         await setData(newData)
    };

    return(
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 ">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">

              {data.map((item, index) => (<button key={index} type="button" className={`${index === 0 && "active"}`} aria-current={`${index === 0 && "true"}`} data-bs-target="#carouselExampleCaptions" data-bs-slide-to={`${index}`} aria-label={`Slide ${index}`}></button>))}
            </div>
            <div className="carousel-inner ">
              {data.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 && "active"}`}>
                  <div className="commentContainer ">
                    <img src="./src/images/open-quote.png" className="message-left" alt="message treatment" />
                    <p><strong>{item.comment.title}</strong></p>
                    <p>{item.comment.text}</p>
                    <img src="./src/images/close-quote.png" className="message-right" alt="message treatment" />
                    <span className="commentCustomerName">- {item.name}</span>
                  </div>
                </div>
              ))}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <form className="row g-3 was-validated" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">

              <div className="container">
                <div className="row">
                  <div className="col-6 ps-0">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Name</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" onChange={(e) => setName(e.target.value)}></textarea>
                  </div>
                  <div className="col-6 pe-0">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" >Surname</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setSurname(e.target.value)} rows="1"></textarea>
                  </div>
                </div>
              </div>

            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label" >Title</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setTitle(e.target.value)} rows="1"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label" >Comment</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setComment(e.target.value)} rows="3"></textarea>
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