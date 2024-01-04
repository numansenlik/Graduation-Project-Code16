import React, { useContext } from 'react'
import { FavProductContext } from '../../context/FavProductContext'
import { ProductsDataContext } from '../../context/ProductsDataContext'

function Fav() {
  const { data } = useContext(ProductsDataContext)
  const { favButtonStates, handleRemoveFav } = useContext(FavProductContext)
  return (
    <div className="container">
      <h1 className="my-4 text-center">Favorite Products</h1>
      <div className="row">
        {data.map((item, index) => (
          favButtonStates[item.productId] && (
            <div key={index} className="col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img alt={"product"} src={item.image450} className="card-img-top p-4" />
                <div className="card-body">
                  <h5 className="card-title ">{item.brandName}</h5>
                  <p className='card-text'>{item.displayName}</p>
                  <div className='row'>
                    <p className="card-text col-6 position-absolute bottom-0 start-0 p-1 m-1">{`Price: ${item.currentSku.listPrice.substring(1, 6)} $`}</p>
                    <button className='btn col-6 btn-danger position-absolute bottom-0 end-0 p-2 m-1' onClick={() => handleRemoveFav(item)}>Fav Remove</button>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default Fav
