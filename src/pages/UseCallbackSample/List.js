import React, { useEffect ,useState} from 'react'

function List({getItems}) {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        console.log("List");
        setItems(getItems())
    },[getItems]);

  return (<>
    <div>List</div>
    <ul>
    {items.map((item,i)=><li key={i}>{item}</li>)}
    </ul>
    </>)
}

export default List