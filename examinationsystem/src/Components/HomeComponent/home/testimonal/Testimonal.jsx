import React from "react"
import { testimonal } from "../../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>Aarav</h2>
                    <span>web developer</span>
                  </div>
                </div>
                <p>These are batch 2021-2025 students in Centurion University </p>
              </div>
            ))}
          </div>
           
          
        </div>
      </section>
    </>
  )
}

export default Testimonal
