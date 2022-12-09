import React from 'react'
import { useTheme } from './ChuContext'

function Child() {
    
const {darkMode,changeTheme} = useTheme();
  
  return (<>
   <button onClick={changeTheme}>{darkMode?"Light":"Dark"} Mode</button>
    <div style={{
        backgroundColor:darkMode?"black":"orange",
        color:darkMode?"white":"black",
        width:"50vw",
        height:"50vh"
        }}>
            Chu BOREKEK
    </div>

    </>)
}

export default Child