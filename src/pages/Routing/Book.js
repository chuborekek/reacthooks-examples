import React from 'react'
import { useParams } from 'react-router-dom'

function Book() {
    const {bookid} = useParams()
  return (<>
    <div>Book Page</div>
    you are accessing Book#{bookid}
    </>)
}

export default Book