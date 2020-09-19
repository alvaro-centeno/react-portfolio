import React from 'react'
import Jumbo from '../Jumbo'
import Content from '../Content'

const About = (props) => {
    return (
        <div>
            <Jumbo title={props.title} />
            <Content>
                My name is Alvaro Centeno and I currently work as a Workplace Sevices Lead at Salesforce.
                I graduated from San Francisco State University in 2011 with a Bachelors in Liberal Studies and English literature.
                I am currently enrolled in a part-time course at UC Berkely to become a full stack developer and will be graduating on September 19th, 2020.
                Once I complete my course, I want to become a software engineer.
            </Content>
        </div>
    )
}

export default About;
