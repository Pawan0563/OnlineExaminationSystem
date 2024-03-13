import React from "react"
import Back from "../common/back/Back"
import DeveloperCard from "./DeveloperCard"
import "./developer.css"
import Faq from "./Faq"

const app = () => {
  return (
    <>
     <Back title='About our developer' />
      <section className='Test and Exam Types'>
        <div className='container grid'>
          <DeveloperCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default app
