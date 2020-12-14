import React from 'react'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import logo from '../../assets/images/logo.png'
import './index.css'


function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-contacts">
                    <h3>Creator Page Contacts</h3>
                    <ul>
                        <li className="footer-text">
                            <p>Email:</p>
                            <a href="mailto:jeanrojas2007@outlook.com" target="_blank" rel="noreferrer">jeanrojas2007@outlook.com</a>
                        </li>
                        <li className="footer-text">
                            <p>Phone:</p>
                            <a href="tel:+55 (45) 999405679" target="_blank" rel="noreferrer">+55 (45) 999405679</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="footer-social">
                    <ul className="footer-images">
                        <li><a href="https://www.instagram.com/greenday/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"></img></a></li>
                        <li><a href="https://www.facebook.com/GreenDay" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook"></img></a></li>
                        <li><a href="https://twitter.com/GreenDay" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"></img></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© Copyright - Jean's Program</p>
            </div>
        </div>
    );
}

export default Footer;