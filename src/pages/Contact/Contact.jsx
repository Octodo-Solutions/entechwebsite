import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import './Contact.css'
import contact from '../../assets/Contact.png'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-image-wrapper">
            <img src={contact} alt="Contact" className="contact-image" />
            <div className="green-accent-line"></div>
          </div>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
