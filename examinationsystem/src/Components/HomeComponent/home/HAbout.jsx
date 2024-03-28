import React from "react"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our Exams and tests' title='explore our popular online Exams' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                       exams logo
                      </div>
                    </div>
                    <div className='text'>
                      <h1>exams </h1>
                      <div className='rate'>
                        <i className=''></i>
                        <i className=''></i>
                        <i className=''></i>
                        <i className=''></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(0)</label>
                      </div>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                image
                              </div>
                              <div className=''>
                                <h4></h4>
                              </div>
                            </div>
                            <span>1 HOURS FOR EXAM </span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      Free test
                    </h3>
                  </div>
                  <button className='outline-btn'> VIEW </button>
                </div>
              ))}
            </div>
          </div>
        </div>
       
      </section>
    </>
  )
}

export default HAbout
