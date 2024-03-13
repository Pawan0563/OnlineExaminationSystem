import React from "react"
import { developer } from "../../dummydata"

const app = () => {
  return (
    <>
     {developer.map((val) => (
        <div className='AMAN KUMAR'>
          <h4>AMAN KUMAR</h4>
          <h1>
            <span>WEB DEVELOPER</span>
            
          </h1>
          <p></p>
          <button className=''>ABOUT</button>
        </div>
      ))}
    </>
  )
}

export default app
