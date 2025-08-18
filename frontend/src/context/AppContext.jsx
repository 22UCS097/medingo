import { createContext } from "react";
import { doctors } from "../assets/assets";


export const AppContext=createContext();


const AppContextProvider=(props)=>{

    const currencySymbol='$'

    const ele={
         doctors,
         currencySymbol
    }
    return (
        <AppContext.Provider value={ele}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider