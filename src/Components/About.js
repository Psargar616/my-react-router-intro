import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  function clickHandler(){
    navigate("/Support")

  }

  function backHandler(){
    navigate(-1)
  }
  return (

    <div>
      This is ABOUT page
      <br></br>
      <button onClick={clickHandler}>Move to Support Page</button>
      <br></br>
      <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default About
