import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Page404() {
  const navigate = useNavigate();
  //this will redirect to home after 3 seconds
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    },3000)
  },[])

  return (

    <div>Error 404: Page Not Found</div>
  )
}

export default Page404