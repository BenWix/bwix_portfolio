import React, { Component } from 'react'
import twitter from '../images/twitterLogo.png'
import linkedIn from '../images/linkedInLogo.png'
import github from '../images/gitHubLogo.png'

export default class ContactPage extends Component {
    render() {
        return (
            <div className='text'>
                To contact me, please reach out to me on any of the following social media platforms.
                <div className='social-dash'>
                    <a href='https://twitter.com/WichserBen'>
                        <img src={twitter} alt='twitter-logo' className='social-tag'/>
                    </a>
                    <a href='https://www.linkedin.com/in/benjamin-wichser-1b1651179/' >
                        <img src={linkedIn} alt='linked-in-logo' className='social-tag'/>
                    </a>
                    <a href='https://github.com/BenWix' >
                        <img src={github} alt='github-logo'  className='social-tag'/>
                    </a>
                </div>
            </div>
        )
    }
}
