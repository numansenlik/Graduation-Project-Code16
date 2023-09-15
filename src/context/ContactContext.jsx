import { createContext } from 'react';
import contactsGetApi from '../customHooks/contacts/contactsGetApi';
import handleSubmit from '../customHooks/contacts/handleSubmit';
import contacsPutApi from '../customHooks/contacts/contacsPutApi';

const ContactContext = createContext();

function ContactContextProvider({ children }) {
  const [data, isActive, setData] = contactsGetApi();
  async function putData(values, { resetForm }) {
    const newData = await handleSubmit(values, data);
    setData(newData);
    resetForm();
  }
  const deleteCommentById = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    contacsPutApi(updatedData)
  };
  return <ContactContext.Provider value={{ data, isActive, setData, putData, deleteCommentById }}>
    {children}
  </ContactContext.Provider>
}

export { ContactContext, ContactContextProvider }