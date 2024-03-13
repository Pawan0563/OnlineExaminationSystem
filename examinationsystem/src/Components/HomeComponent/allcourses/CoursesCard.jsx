import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
    <section className='coursesCard'>
        <div className=''>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className=''>
                    <img srcalt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1></h1>
                  <div className=''>
                    <i className=''></i>
                    
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4></h4>
                          </div>
                        </div>
                        <span></span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='Free Online tests'>
                <h3>
                
                </h3>
              </div>
              <button className='outline-btn'>View</button>
            </div>
          ))}
        </div>
      </section>
    
    </>
  )
}

export default CoursesCard
