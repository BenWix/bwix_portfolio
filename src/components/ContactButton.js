import React from 'react'

import contactButton from '../images/ContactButton.png'

const ContactButton = () => {
    return (
        <div className='contact-button'>
            <a>
                <img src={contactButton} alt='contact-button'/>
            </a>
        </div>
    )
}

export default ContactButton