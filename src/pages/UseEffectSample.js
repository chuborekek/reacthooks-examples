//https://api.coingecko.com/api/v3/search?query=${searchKey}
import {useEffect, useState} from 'react';

function UseEffectSample(){
const [searchKey,setSearchKey] = useState('');
const [coins,setCoins] = useState([]);

useEffect(()=>{
    fetch(`https://api.coingecko.com/api/v3/search?query=${searchKey}`)
    .then(fetchResponse=>fetchResponse.json())
    .then(jsonResponse=>setCoins(jsonResponse.coins))

    return ()=>{
    }

},[searchKey]);

return(<>
    <h1>Search for Cryptocurrency Coin: {searchKey.toUpperCase()}</h1>
    Search:<input onChange={(e)=>setSearchKey(e.target.value)}/>
   
    { searchKey &&
        coins.map(coin=> <h3>{JSON.stringify(coin)}</h3>)
    }

</>)

}
export default UseEffectSample