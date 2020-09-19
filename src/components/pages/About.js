import React from 'react';
import Jumbo from '../Jumbo';
import Content from '../Content';
import { Card } from 'react-bootstrap';



const About = (props) => {
    return (
        <div>
            <Jumbo title={props.title} />
            <Content>
                <Card>
                    <Card.Img style={{ height: '30rem' }} variant="top" src='https://www.sfaf.org/wp-content/uploads/posts/SF_bridge_1200x800.jpg' />
                    <Card.Body>
                        <Card.Text className='aboutText'>
                            <p> My name is Alvaro Centeno and I currently work as a Workplace Sevices Lead at Salesforce.</p>
                            <p>I graduated from San Francisco State University in 2011 with a Bachelors in Liberal Studies and English literature.</p>
                            <p>I am currently enrolled in a part-time course at UC Berkely to become a full stack developer and will be graduating on September 2020. I am well versed in: JavaScript, React, MongoDB, MySQL, HTML, CSS, BootStrap, Node.js, AJAX, jQuery, Backend and Frontend</p>

                            <p>    Once I complete my course, I want to become a software engineer.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Content>
        </div>
    )
}

export default About;
