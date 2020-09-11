import React from 'react'

import contactButton from '../images/ContactButton.png'

const ContactButton = () => {
    return (
        <div className='contact-button'>
            <a href='/contact'>
                <img src={contactButton} alt='contact-button'/>
            </a>
        </div>
    )
}

export default ContactButton