import React from "react"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hdeveloper from "./Hdeveloper"
import Testimonal from "./testimonal/Testimonal"
import Navbar from "../../Navbar"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <AboutCard /> 
      <HAbout />
      <Testimonal />
      <Hdeveloper /> 
    </>
  )
}

export default Home
