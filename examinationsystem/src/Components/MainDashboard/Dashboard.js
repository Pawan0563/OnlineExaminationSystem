import React from 'react'
import "./Dashboard.css"
import Footer from '../Footer'
import ImageSlider from './ImageSlider';




function Dashboard() {
  

  return (<>
     <div>
      {/* <h1>Image Slider</h1> */}
      <ImageSlider  />
    </div>
 
  <Footer/>
  </>
  )
}

export default Dashboard