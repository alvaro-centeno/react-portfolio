import React from 'react'
import Jumbo from '../../components/Jumbo'
import Carousel from '../Carousel'



const Home = (props) => {
    return (
        <div>
            <Jumbo title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    )
}

export default Home;
