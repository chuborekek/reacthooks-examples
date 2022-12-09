import React, { useLayoutEffect,useState } from 'react'

function UseLayoutEffectSample() {
    const [showModal,setShowModal]= useState(false);
    const [modalTheme,setModalTheme]= useState();
   useLayoutEffect(()=>{
    let whatModalCss={};
    if(showModal){
        whatModalCss={
            display:"block",
            position:"absolute",
            backgroundColor:"black",
            color:"white",
            width:"50vw",
            height:"50vh"
        }
    }else{
        whatModalCss={
            display:"none"
        }
    }
    setModalTheme(whatModalCss);
    },[showModal]);

  return (<>
    <button onClick={()=>setShowModal(prev=>!prev)}>Show Modal</button>
    {showModal &&
        <div style={modalTheme}>
            HELLO BOREKEK
        </div>
    }
    <h1>just another text</h1>
    </>)
}

export default UseLayoutEffectSample