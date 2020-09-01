import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About Ben</h1>
                <p>I am a mechanical engineer turned web developer. 
                    My interest in coding was sparked while doing my undergrad at Purdue University. 
                    After graduating, I spent some time following my passion for environmental causes and 
                    sustainable living by building tiny houses with a green builder (make sure to 
                    find me on an episode of HGTV's <em>Tiny House, Big Living</em>). 
                    {/* Add Real estate stuff here */}
                </p> 
                
                <p>After this, I gained some more professional experience working as a fire sprinkler design engineer 
                    and a mechanical design engineer at a machine shop making machines for manufacturing. 
                    I kept my interest in coding because of the fun challenge coding presented, the culture 
                    of the tech industry, and the desire for a greener career.
                </p>
                <p>When I am not working on a project
                    {/* Maybe real estate here */}
                    , I am probably having fun outside somewhere. I have been a rock climber for 
                    my entire adult life, on the weekends I perform and teach acrobatics with my partner,
                    {/* Comma */}
                     Meghan, I am an avid birder, 
                    and I love to go running and mountain biking.
                </p>
            </div>
        )
    }
}
