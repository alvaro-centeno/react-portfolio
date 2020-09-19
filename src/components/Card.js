import React from 'react'
import CardInfo from './CardInfo'

const Card = (props) => {

    return (
        <div className="d-inline-block a-card" onClick={(e) => props.onClick(props.item)}>
            <img className="a-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </div>
    )
}

export default Card
