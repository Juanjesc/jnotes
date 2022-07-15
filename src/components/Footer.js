import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import '../styles/Footer.css'


const Footer = () => {
  return (
    <footer>
        <div className="footer-wrapper">
            <p>By Juan Jesús Sedano Calderón</p>
            <div className="socials-wrapper">

                <a href="https://www.linkedin.com/in/juan-jes%C3%BAs-sedano-calder%C3%B3n-08938b1b0/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='linkedin-icon icons'/>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
