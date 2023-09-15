import { createContext, useEffect, useState, useContext } from 'react';
import { ProductsDataContext } from './ProductsDataContext';

const FavProductContext = createContext();

function FavProductContextProvider({ children }) {
  const { data } = useContext(ProductsDataContext)
  const [userFavProduct, setUserFavProduct] = useState([]);
  const [favButtonStates, setFavButtonStates] = useState({}); // Her ürün için Fav düğme durumlarını saklar

  useEffect(() => {
    // Her ürün için başlangıçta Fav düğmesi kapalı (false) olacak şekilde başlatın
    const initialButtonStates = {};
    data.slice(0, 32).forEach((item) => {
      initialButtonStates[item.productId] = false;
    });
    setFavButtonStates(initialButtonStates);
  }, [data]);

  const handleSubmitFav = (item) => {
    // Favori ürünleri saklamak için state'i güncelleyin
    setUserFavProduct((prevFavs) => [...prevFavs, item.productId]);
    // Fav düğmesini etkinleştirin (true yapın)
    setFavButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [item.productId]: true,
    }));
  }

  const handleRemoveFav = (item) => {
    // Favori ürünleri saklamak için state'i güncelleyin
    setUserFavProduct((prevFavs) => prevFavs.filter((productId) => productId !== item.productId));
    // Fav düğmesini devre dışı bırakın (false yapın)
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