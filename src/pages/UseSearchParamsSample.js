import React from 'react'
import { useSearchParams } from 'react-router-dom'

function UseSearchParamsSample() {
    //useSearchParam will get the value from the URL parameters
    //example http://chu.com/?lang=en&page=3 you can get the lang value and the page value
    const [searchParams,setSearchParams] = useSearchParams();
    const lengwahe = searchParams.get("lang");
    const pahina = searchParams.get("page");

  return (<>
    <h1>UseSearchParams Sample</h1>
    <h3>value for lang is {lengwahe}</h3>
    <h3>value for page is {pahina}</h3>
    <button onClick={()=>setSearchParams({page:4,lang:"es"})}>This is an example of changing value in URL parameter</button>
    </>)
}

export default UseSearchParamsSample