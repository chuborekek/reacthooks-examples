import React, { useDeferredValue} from 'react'

function Lista({passInput}) {
   
    const deferredInput = useDeferredValue(passInput)
   
    const lst = () =>{
         const l = [];
        for(let i=0;i<20000;i++){
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l;
    }
    
    return lst()
}

export default Lista