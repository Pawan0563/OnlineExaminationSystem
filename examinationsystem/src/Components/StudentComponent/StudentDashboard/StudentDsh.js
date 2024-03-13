import React from 'react'


import StudentNavbar from "./StudentNavbar/StudentNavbar"
import StudentCard from './StudentCard'
function StudentDsh() {
  return (
    <>
    
    <StudentNavbar/>
    <div className="CardContainer">
    <StudentCard
        title="Subject"
        
        link=""
        imageUrl="https://cdn.pixabay.com/photo/2019/09/01/06/17/board-4444443_640.jpg"
      />
    <StudentCard
        title="See Result"
      
        link="https://example.com"
        imageUrl="https://cdn.pixabay.com/photo/2019/09/01/06/17/board-4444443_640.jpg"
      />
    </div>
    


    
    </>
  )
}

export default StudentDsh