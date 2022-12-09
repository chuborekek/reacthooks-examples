import React,{useState} from 'react'
import Lista from './Lista';

function UseDeferredValueSample() {
    //Returns a deferred version of the value that may “lag behind” it. 
    //This is commonly used to keep the interface responsive when you have 
    //something that renders immediately based on user input and something 
    //that needs to wait for a data fetch.
    //It implements a delay before calculating/rendering what is needed to be done 
    //example:typing the input fast and calculate once you stop or done typing
    const [input,setInput] = useState('');
  
  return (<>
    <div>UseDeferredValueSample</div>
    <input type="text" onChange={e=>setInput(e.target.value)}/>
    <Lista passInput={input}/>
    
    </>)
}

export default UseDeferredValueSample