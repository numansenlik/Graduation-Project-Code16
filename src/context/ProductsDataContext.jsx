import { createContext, useEffect, useState } from 'react';
import productsApi from '../customHooks/productsApi';

const ProductsDataContext = createContext();

function ProductsDataContextProvider({ children }) {
  const data = productsApi();
  return <ProductsDataContext.Provider value={{ data }}>
    {children}
  </ProductsDataContext.Provider>
}

export { ProductsDataContext, ProductsDataContextProvider }