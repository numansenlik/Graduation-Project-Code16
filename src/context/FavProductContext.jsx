import { createContext, useEffect, useState, useContext } from 'react';
import { ProductsDataContext } from './ProductsDataContext';

const FavProductContext = createContext();

function FavProductContextProvider({ children }) {
  const { data } = useContext(ProductsDataContext)
  const [userFavProduct, setUserFavProduct] = useState([]);
  const [favButtonStates, setFavButtonStates] = useState({}); 

  useEffect(() => {
    const initialButtonStates = {};
    data.slice(0, 32).forEach((item) => {
      initialButtonStates[item.productId] = false;
    });
    setFavButtonStates(initialButtonStates);
  }, [data]);

  const handleSubmitFav = (item) => {
    setUserFavProduct((prevFavs) => [...prevFavs, item.productId]);
    setFavButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [item.productId]: true,
    }));
  }

  const handleRemoveFav = (item) => {
    setUserFavProduct((prevFavs) => prevFavs.filter((productId) => productId !== item.productId));
    setFavButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [item.productId]: false,
    }));
  }

  return <FavProductContext.Provider value={{ userFavProduct, favButtonStates, handleSubmitFav, handleRemoveFav }}>
    {children}
  </FavProductContext.Provider>
}

export { FavProductContext, FavProductContextProvider }