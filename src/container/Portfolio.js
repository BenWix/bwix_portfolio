import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='cards'>
                <Card>
                    <CardImg top width="100%" src="https://i.imgur.com/stPUVIV.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Any Activity</CardTitle>
                        <CardSubtitle>Javascript, Ruby on Rails, External API</CardSubtitle>
                        <CardText>Application that presents the weather based on the user's location, 
                            and recommends an activity to do.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://i.imgur.com/ZeaQi5l.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Bike Shop Pro</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://i.imgur.com/DKnfpQL.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Climbing Routes Finder</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://i.imgur.com/WVO3GVl.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>My Climb Dashboard</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                 
            </div>
        </div>
    )
}

export default Portfolio
