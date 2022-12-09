import React,{createContext,useContext,useState} from 'react'

const ChuThemeContext = createContext(); 

function ChuContext({children}) {   

    const [darkMode,setDarkMode]=useState(true);

    function changeTheme(){
        setDarkMode(prevColor=>!prevColor);
    }

    return (
        <ChuThemeContext.Provider value={{darkMode,changeTheme}}>
            {children}
        </ChuThemeContext.Provider>
    )

}
export default ChuContext

export const useTheme=()=>{ return useContext(ChuThemeContext)} 