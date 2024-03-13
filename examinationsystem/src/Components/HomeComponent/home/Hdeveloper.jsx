import React from "react"
import Heading from "../common/heading/Heading"
import DeveloperCard from "../developer/DeveloperCard"

const Hdeveloper = () => {
  return (
    <>
    <section className='hdeveloper padding'>
        <Heading subtitle='OUR DEVELOPER AND GUIDE' title='' />
        <div className='price container grid'>
          <DeveloperCard />
        </div>
      </section>
    </>
  )
}

export default Hdeveloper
