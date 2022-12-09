import React,{useState,useRef} from 'react'

function UseRefSample() {
    const [nickname,setNickname] = useState('');
    const [dogName,setDogName]= useState('');
    const refDogName=useRef();

    const showDogName=()=>{
       setDogName(()=>refDogName.current.value)
    }

  return (
   <>
    <h1>Hello {nickname}!---using event target value</h1>
    <input name="txtNickname" onChange={(e)=>setNickname(e.target.value)} placeholder="Your Nickname"/>
    <br/>

    <h1>Hello {dogName}!---using useRef </h1>
    <input name="txtDogName" ref={refDogName} onChange={showDogName} placeholder="Your Dog name"/>
    <br/>

   
   </>
  )
}

export default UseRefSample