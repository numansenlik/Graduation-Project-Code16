import { createContext, useEffect, useState } from 'react';
import contactsGetApi from '../customHooks/contacts/contactsGetApi';

const ContactContext = createContext();

function ContactContextProvider({ children }) {
  const [data, isActive, setData] = contactsGetApi();
  return <ContactContext.Provider value={{ data , isActive, setData }}>
    {children}
  </ContactContext.Provider>
}

export { ContactContext, ContactContextProvider }