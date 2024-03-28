import React from "react"
import { blog } from "../../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
          <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ONLINE EXAMINATION SYSTEM</h1>
            <p>Successful and unsuccessful people do not vary greatly in their abilities.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Centurion University of Technology and Management,Paralakhemundi, odisha(India)
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 8986550357
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
        Centurion Onine Examination System  <i className='fa fa-heart'></i>  ©2024 Copyright
        </p>
      </div>
    </>
  )
}

export default Footer
