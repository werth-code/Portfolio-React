import React from 'react'
import { Button } from './Button'
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
        </div>
    )
}

export default Footer
