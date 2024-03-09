import React from 'react'
import "./Dashboard.css"
import Footer from '../Footer'
import ImageSlider from './ImageSlider';
import Navbar from '../Navbar';
import Service from './Service';
//import Developer from './Developer';





function MainDashboard() {
  

  return (<>
     <div>
      {/* <h1>Image Slider</h1> */}
      <Navbar/>
      <ImageSlider  />
      <Service />
      {/* <Developer/> */}
    </div>
 
  <Footer/>
  </>
  )
}

export default MainDashboard;