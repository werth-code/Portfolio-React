import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom'
import'./Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    Sign up for project updates!
                </p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' type='email' name='email' placeholder='Email'/>
                        <Button buttonStyle='btn--outline'>Sign Up!</Button>
                    </form>
                </div>
            </section>
            {/* <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                    </div>
                </div>
            </div> */}
            <section class='social-media'>
                <div class='social-media-wrap'>
                <div class='footer-logo'>
                    <Link to='/' className='social-logo'>MW</Link>
                </div>
                <small class='website-rights'>Matthew Werth © 2021</small>
                <div class='social-icons'>
                    <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i class='fab fa-facebook-f' />
                    </Link>
                    <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
                    </Link>
                    <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' />
                    </Link>
                </div>
                </div>
            </section>
            </div>
    )
}

export default Footer
