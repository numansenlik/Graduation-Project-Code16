import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products({ data }) {
  const [search, setSearch] = useState('');
  

  return (
    <div className="container">
      <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} aria-describedby="basic-addon1" />
      <h1 className="my-4 text-center">Products</h1>
      <div className="row">
        {data.slice(0, 32).filter((item) => {
        return search.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search);
        }).map((item, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card">
              <img alt={"product"} src={item.image450} className="card-img-top p-4" />
              <div className="card-body">
                <h5 className="card-title ">{item.brandName}</h5>
                <p className='card-text'>{item.displayName}</p>
                <p className="card-text ">{`${item.currentSku.listPrice.substring(1, 6)} $`}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;
