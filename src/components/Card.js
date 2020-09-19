import React from 'react'
import CardInfo from './CardInfo'
import { Card, Button } from 'react-bootstrap'



const Cards = (props) => {

    return (
        <div style={{ width: '30%' }} className="d-inline-block a-card" onClick={(e) => props.onClick(props.item)}>
            <Card >
                <Card.Img className="a-card-img" variant="top" src={props.item.imgSrc} alt={props.item.imgSrc} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* <Button className='align-self-center mx-auto' variant="primary" href={props.link} target="_blank" rel="noopener noreferrer">Show More</Button> */}

        </div>






    )
}



export default Cards