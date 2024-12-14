import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState([]);

  console.log(showModal);

  return (
    <AppContext.Provider value={{ showModal, setShowModal, setPost, post }}>
      {children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
