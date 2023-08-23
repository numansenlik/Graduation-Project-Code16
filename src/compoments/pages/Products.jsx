import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products({data}) {

  return (
    <div className="container">
      <h1 className="my-4 text-center">Products</h1>
      <div className="row">
        {data.slice(0,32).map((item, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card">
              <img alt={"..."} src={item.image_link} className="card-img-top bg-dark" />
              <div className="card-body">
                <h5 className="card-title ">{item.name}</h5>
                <p className="card-text ">{`${item.price} $`}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Products;
