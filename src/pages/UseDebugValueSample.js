import React,{useState,useRef, useDebugValue} from 'react'

function UseDebugValueSample() {
    const [counter,setCounter] = useState(0);

    useDebugValue(counter) //you can use this for debugging and see the state of desired variable/function/etc
   

    const incrementCount = () =>{
        setCounter(prevCount => prevCount+1);
    }
    const decrementCount = () => {
        setCounter(prevCount=>prevCount-1);
    }

    //useState Sample 2 - where value is an object
    const [personInfo,setPersonInfo] = useState({"firstName":"","lastName":""});
    const firstNameRef=useRef();
    const lastNameRef=useRef()


    useDebugValue(personInfo)


    const greetPerson = () =>{
        setPersonInfo(prevObj => {
            return {...prevObj, 
                    firstName:firstNameRef.current.value.toUpperCase(), 
                    lastName:lastNameRef.current.value.toUpperCase()
                    }
        })
    }

  return (
    <>
    
        <h1>useState Hook Sample#1 - Counter</h1>
        <div>
            <button onClick={incrementCount}>+</button>
            {counter}
            <button onClick={decrementCount}>-</button>
        </div>

        <h1>useState Hook Sample#2 - Changing an Object in State</h1>
        <div>
            <h1>Hello {personInfo?.firstName} {personInfo?.lastName}!!!Mabuhay!!!</h1>
            <input ref={firstNameRef} type="text"/>
            <input ref={lastNameRef} type="text"/>
            <button onClick={greetPerson}>Greet</button>
        </div>
    </>
  )
}

export default UseDebugValueSample