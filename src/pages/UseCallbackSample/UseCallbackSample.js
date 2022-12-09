import React,{useCallback, useState,useMemo} from 'react'
import List from './List';

function UseCallbackSample() {
    const [dark,setDark] = useState(false);
    const [num,setNum] = useState(0);

    const getItems = useCallback(()=>{
        console.log("getItems main");
        return [num+1,num+2,num+3,num+4,num+5];
    },[num]);

    const someFunction = ()=>{
        console.log("someFunction");
    }

    const toggleTheme = ()=>{
        console.log(" toggleTheme");
        return setDark(prev=>!prev)
    }

    const thm = useMemo(()=>{
    return {
        backgroundColor:dark?"black":"orange",
        color:dark?"orange":"black",
        width:"50vw",
        height:"50vh"
        }
    },[dark]);
  
    
    return (<>
    <div>UseCallbackSample</div>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <div style={thm}>
    <button onClick={someFunction}>just a button</button>
    <input type="number" onChange={(e)=>setNum(parseInt(e.target.value))} placeholder="put starting number"/>
    <List getItems={getItems}/>
    </div>
    </>)
}

export default UseCallbackSample