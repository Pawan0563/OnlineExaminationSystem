import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/courses'>Testimonial</Link>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
            <li>
              <Link to='/team'>Sign in</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>VIEW RESULT</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
