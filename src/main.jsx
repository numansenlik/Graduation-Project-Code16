import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { ProductsDataContextProvider } from './context/ProductsDataContext.jsx'
import { ContactContextProvider } from './context/ContactContext.jsx'
import { FavProductContextProvider } from './context/FavProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsDataContextProvider>
        <FavProductContextProvider>
          <UserContextProvider>
            <ThemeContextProvider>
              <ContactContextProvider>
                <App />
              </ContactContextProvider>
            </ThemeContextProvider>
          </UserContextProvider>
        </FavProductContextProvider>
      </ProductsDataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
