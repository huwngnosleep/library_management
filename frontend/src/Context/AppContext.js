import { createContext, useEffect, useState } from "react";
import React from 'react';
export const AppContext = createContext({});

export const AppProvider = ({children}) =>{
    const [bookData, setbookData] = useState([{
      "key": "",
      "bookname": "",
      "genre": "",
      "author": "",
      "description": ""
      }]);

  useEffect(() =>{
    fetch('https://demo0645409.mockable.io/bookdata')
      .then(res => res.json())
      .then(res =>{
        setbookData(res); 
      })
    }, [])
    return <AppContext.Provider value={{bookData, setbookData}}>
        {children}
    </AppContext.Provider>
}