import React,{useState,useTransition} from 'react'

function UseTransitionSample() {
     //useTransition should be use if there is a slow loading on the page
    //so you set least priority to run inside startTransition
    const [isPending,startTransition] = useTransition()
    const [txt,setTxt]=useState('');
    const [lst,setLst] = useState([]);

    const showInput=(e)=>{
        let l = [];

        setTxt(p=>e.target.value) //this will be run with higher priority than codes inside startTransition

        startTransition(()=>{
        for(let i=0;i<20000;i++){
            l.push(e.target.value)
        }
        setLst(l)
        });
    }

  return (<>
    <div>UseTransitionSample</div>
    <input type="text" onChange={showInput} />
    <ul>
    {isPending
        ?"Loading..."
        : lst.map((item,i)=><li key={i}>{item}</li>)
    }
    </ul>
    </>)
}

export default UseTransitionSample