import React from 'react'
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                Keep in touch
                </p>
                <p className='footer-subscription-text'>
                Subscribe to our newsletter for updates and exclusive special offers.
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                            type='email' 
                            name='email' 
                            placeholder='Your Email' 
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-Links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Catalog</h2>
                        <Link to='/products'>BLANK</Link>
                        <Link to='/'>Tableware for home</Link>
                        <Link to='/'>Tableware for cafes and restaurants</Link>
                        <Link to='/'>Decoration</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Information</h2>
                        <Link to='/'>BLANK</Link>
                        <Link to='/'>Special prices</Link>
                        <Link to='/'>About us</Link>
                        <Link to='/'>Delivery</Link>
                    </div>                    
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to='/'>BLANK</Link>
                        <Link to='/'>phone number</Link>
                        <Link to='/'>address</Link>
                        <Link to='/'>address</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>         
                </div>
            </div>
            <section className='social-meida'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                        Paddilla
                        </Link>
                    </div>
                    <small className='website-rights'>Padilla © 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;