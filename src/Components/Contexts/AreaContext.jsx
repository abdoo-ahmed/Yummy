import React, { createContext, useEffect, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const Areacontext =  createContext();
export const AreaContext = ({ children }) => {

    const [Countries , setCountries] = useState(null)
    const [idMeal , setIdMeal] = useState(null)

    const CountryValue = localStorage.getItem('Country');
    useEffect(()=>{
        if(CountryValue!= null){
            setCountries(CountryValue)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

    const IDM = localStorage.getItem('Details');
    useEffect(()=>{
        if(IDM!= null){
            setIdMeal(IDM)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])
    
  return <>
  <Areacontext.Provider value={{setCountries , Countries ,idMeal , setIdMeal}}>
    {children}
  </Areacontext.Provider>
  </>
}

export default AreaContext