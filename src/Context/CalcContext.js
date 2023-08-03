import React,{createContext, useState} from 'react'

export const Calculator =createContext()
const CalcProvider = ({children}) => {
    const [calc, setCalc] = useState({
        sign:"",
        num:0,
        res:0,
    });
    const providerValue ={
        calc, setCalc
    }
    return(
        <CalcContext.Provider value={providerValue}>
            {children}
        </CalcContext.Provider>
    )

}


export default CalcContext