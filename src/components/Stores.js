import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

export default function Stores() {
    return (

        <Container>

<br></br>
<br></br>
            <Row lg={true}>
                <Col>
                <p className="text-center fs-1">Choose your store in Springfield IL</p>

                </Col>
            </Row>
            <Row lg={true}>
                <Col>
                    <CardGroup>
                        <Card>
                        <Image style={{ height: "75px", width: "75px", border:"1px solid #E8E9EB" }} src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png" roundedCircle />
                        <Card.Title>ALDI</Card.Title>
                        <Card.Text>Pickup 3.3mi</Card.Text>
                        </Card>
                    </CardGroup>
                  
                
                </Col>

                <Col>
                <CardGroup>
                        <Card>
                        <Image style={{ height: "75px", width: "75px", border:"1px solid #E8E9EB" }} src="https://assets.stickpng.com/images/62ff5a0b54243308ace8215d.png" roundedCircle/>
                        <Card.Title>Schnucks</Card.Title>
                        <Card.Text>Pickup 2.3mi</Card.Text>
                        </Card>
                    </CardGroup>
                
                </Col>

                <Col>
                <CardGroup>
                        <Card>
                        <Image style={{ height: "75px", width: "75px", border:"1px solid #E8E9EB" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mlWJfR-teC1MtNnLwrhGbnAYYLhYjxh6r4KonVaP5A&s" roundedCircle/>
                        <Card.Title>Hy-Vee</Card.Title>
                        <Card.Text className="secondary">Delivery by 1:00pm</Card.Text>
                        </Card>
                    </CardGroup>
                
                </Col>
            </Row>
<br></br>
<br></br>
            <Row lg={true}>
                <Col>
                    <CardGroup>
                        <Card>
                        <Image style={{ height: "75px", width: "75px", border:"1px solid #E8E9EB" }} src="https://www.mycountymarket.com/wp-content/uploads/2020/03/CM_circle_logo.jpeg" roundedCircle />
                        <Card.Title>My County Market</Card.Title>
                        <Card.Text>Delivery by 1:00pm</Card.Text>
                        </Card>
                    </CardGroup>
                  
                
                </Col>

                <Col>
                <CardGroup>
                        <Card>
                        <Image style={{ height: "75px", width: "75px", border:"1px solid #E8E9EB" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO7w81n2Qraiv8C3wQtKV0n24Y6bnlvGtpVunF8_tjw&s" roundedCircle />
                        <Card.Title>Meijer</Card.Title>
                        <Card.Text>Delivery by 1:00pm</Card.Text>
                        </Card>
                    </CardGroup>
                
                </Col>

                <Col>
                <CardGroup>
                        <Card>
                        <Image style={{ height: "75px", width: "75px", border:"1px solid #E8E9EB" }} src="https://media.glassdoor.com/sqll/470451/binny-s-beverage-depot-squarelogo-1581097704679.png" roundedCircle />
                        <Card.Title>Binny's Beverage Depot</Card.Title>
                        <Card.Text>Delivery by 1:00pm</Card.Text>
                        </Card>
                    </CardGroup>
                
                </Col>
            </Row>

<br></br>
<br></br>

            <Row lg={true}>
                <Col>
                    <CardGroup>
                        <Card>
                        <Image style={{ height: "75px", width: "75px", border:"1px solid #E8E9EB" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sams_Club.svg/2048px-Sams_Club.svg.png" roundedCircle />
                        <Card.Title>Sam's Club</Card.Title>
                        <Card.Text>Delivery by 1:00pm</Card.Text>
                        </Card>
                    </CardGroup>
                  
                
                </Col>

                <Col>
                <CardGroup>
                        <Card>
                        <Image style={{ height: "75px", width: "75px", border:"1px solid #E8E9EB" }} src="https://assets.stickpng.com/images/62ff5a0b54243308ace8215d.png" roundedCircle />
                        <Card.Title>Schnucks Now</Card.Title>
                        <Card.Text>Delivery by 12:45pm</Card.Text>
                        </Card>
                    </CardGroup>
                
                </Col>

                <Col>
                <CardGroup>
                        <Card>
                        <Image style={{ height: "75px", width: "75px", border:"1px solid #E8E9EB" }} src="https://logos-world.net/wp-content/uploads/2021/11/Walgreens-Emblem.png" roundedCircle />
                        <Card.Title>Walgreens</Card.Title>
                        <Card.Text>Delivery by 1:00pm</Card.Text>
                        </Card>
                    </CardGroup>
                
                </Col>
            </Row>
            <br></br>
            <br></br>
        
        </Container>


    )
}