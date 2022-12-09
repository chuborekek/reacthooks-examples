import React,{useState,useMemo, useEffect} from 'react'

function UseMemoSample() {
    const [numberForSlowFunction,setNumberForSlowFunction] = useState(5);
    const [dark,setDark]= useState(false);
    
    const doubleNum = useMemo(()=>slowFunction(numberForSlowFunction),[numberForSlowFunction]);


    const myTheme = useMemo(()=>{
        return{
        backgroundColor: dark?"black":"orange",
        color: dark?"orange":"black",
        width: "50vw",
        height: "50vh"
        }
    },[dark]);

    useEffect(()=>{
        console.log("myTheme was rendered");
    },[myTheme]);

  return (<>
    <h1>UseMemo Sample</h1>
    <ul>
    <li>use useMemo if executing a state causing slow function, or takes high computational time,
        where when the page renders it will run again the function,or it will recompute again causing to affect
        other when the page render again. To avoid recomputing it again and be affected with other then just use useMemo
    </li>
    <li>
    another use case is when referencing to an object, it will rerender again since one object will never be the
    same to another object even if the value of it is the same (or any reference type).
    To avoid running same object again then you can use useMemo
    </li>
    </ul>
    
    <h3>use Memo #1</h3>
    <input type="number" name = "txtnumberForSlowFunction" onChange={(e)=>setNumberForSlowFunction(parseInt(e.target.value))}/>
    number is {numberForSlowFunction}
    <br/>
    <br/>
    <h3>use Memo #2</h3>
    <button onClick={()=>setDark(prev=>!prev)}>Click to change theme</button>
    <div style={myTheme}> HELLO BOREKEK,your double whammy number is {doubleNum}</div>

    </>)

    function slowFunction(num){
        for(let i=0;i<1000000;i++){}
        console.log("pumasok sa slowFunction");
        return num*2;
    }


}

export default UseMemoSample