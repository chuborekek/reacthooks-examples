import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function BookLayout() {
  return (<>
    <div>Book Layout</div>
    <Link to="/book/1">Book 1</Link> | 
    <Link to="/book/2">Book 2</Link> |
    <Link to="/book/newbook">NewBook</Link>
    <Outlet/>
    </>)
}

export default BookLayout