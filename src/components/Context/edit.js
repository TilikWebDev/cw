import React, { createContext, useContext, useState } from "react";

const EditContext = createContext();

export const EditProvider = ({ children }) => {
  const [edit, setEdit] = useState(false);

  return (
    <EditContext.Provider value={{ edit, setEdit }}>
      {children}
    </EditContext.Provider>
  );
};

export const useEdit = () => useContext(EditContext);
