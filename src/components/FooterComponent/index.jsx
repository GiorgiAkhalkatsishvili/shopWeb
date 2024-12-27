import React from 'react'
import './FooterComponent.css'

const FooterComponent = () => {
  return (
    <div className='footerContainer'>
      <div className="main-texts">
        <h4>Speak to our expert at1-800-453-6744</h4>
        <h4>Follow Us</h4>
      </div>
      <hr />
      <div className="bottom-texts">
        <div className="list-container">
           <div className="list1">
            <div className="inner-list1">
              <h2>Contact</h2>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Tourz Reviews</li>
            <li>Data Policy</li>
            <li>Help center</li>
            <li>How it works</li>
          </ul>
          </div>
          <div className="inner-list2">
             <h2>Company</h2>
          <ul>
            <li>Careers</li>
            <li>Get Newsletter</li>
            <li>Incentives</li>
            <li>Investors</li>
            <li>Suppliers</li>
            <li>Roadster</li>
          </ul>
          </div>
          <div className="inner-list2">
             <h2>Support</h2>
          <ul>
            <li>Careers</li>
            <li>Get Newsletter</li>
            <li>Incentives</li>
            <li>Investors</li>
            <li>Suppliers</li>
            <li>Roadster</li>
          </ul>
            </div>
          </div>
          <hr />
       </div>
      </div>
    </div>
  )
}

export default FooterComponent;
