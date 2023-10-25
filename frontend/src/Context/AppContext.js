import { createContext, useEffect, useState } from "react";
import React from 'react';
export const AppContext = createContext({});

export const AppProvider = ({children}) =>{
    const [bookData, setbookData] = useState([{
      "key": "",
      "name": "",
      "genre": "",
      "author": "",
      "description": ""
      }]);

  useEffect(() =>{
    fetch('http://localhost:5000/books/')
      .then(res => res.json())
      .then(res =>{
        setbookData(res); 
      })
    }, [])
    return <AppContext.Provider value={{bookData, setbookData}}>
        {children}
    </AppContext.Provider>
}