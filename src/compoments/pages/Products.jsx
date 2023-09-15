import React, { useState, useContext } from 'react';
import { ProductsDataContext } from '../../context/ProductsDataContext';
import { FavProductContext } from '../../context/FavProductContext';
import { UserContext } from '../../context/UserContext';

function Products() {
  const { user } = useContext(UserContext);
  const { data } = useContext(ProductsDataContext);
  const [search, setSearch] = useState('');
  const { favButtonStates, handleSubmitFav, handleRemoveFav } = useContext(FavProductContext)
  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        aria-describedby="basic-addon1"
      />
      <h1 className="my-4 text-center">Products</h1>
      <div className="row">
        {data
          .slice(0, 32)
          .filter((item) => search.trim().toLocaleLowerCase() === '' ? true : item.displayName.toLocaleLowerCase().includes(search))
          .map((item, index) => (
            <div key={index} className="col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img alt={"product"} src={item.image450} className="card-img-top p-4" />
                <div className="card-body">
                  <h5 className="card-title ">{item.brandName}</h5>
                  <p className='card-text'>{item.displayName}</p>
                  <div className='row'>
                    <p className="card-text col-6 position-absolute bottom-0 start-0 p-1 m-1  ">{`Price: ${item.currentSku.listPrice.substring(1, 6)} $`}</p>
                    {user && (favButtonStates[item.productId] ? (
                      <button className='btn btn-danger col-5 offset-1 position-absolute bottom-0 end-0 p-2 m-1' onClick={() => handleRemoveFav(item)}>Fav Remove</button>
                    ) : (
                      <button className='btn btn-primary col-5 offset-1 position-absolute bottom-0 end-0 p-2 m-1' onClick={() => handleSubmitFav(item)}>Fav Add</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
