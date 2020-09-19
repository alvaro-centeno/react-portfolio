import React from 'react';
import github from '../assets/images/github.jpg'
// import linkedin from '../assets/images/linkedin.jpg';
import linkedin from '../assets/images/linkedin.jpg'
import medium from '../assets/images/medium.png'
import Cards from './Card'
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    subTitle: 'Check out my work on GitHub',
                    imgSrc: github,
                    link: 'https://github.com/alvaro-centeno',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Alvaro Centeno',
                    subTitle: 'Connect with me',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/alvaro-centeno/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Building your first full-stack website with a team',
                    subTitle: 'My first Mediunm article',
                    imgSrc: medium,
                    link: 'https://medium.com/@alvaroc0689/building-your-first-full-stack-website-with-a-team-8dd19c5dda28',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }



    makeItems = (items) => {
        return items.map(item => {
            return <Cards item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row className='justify-content-around'>
                        {this.makeItems(this.state.items)}

                    </Row>
                </Container>
            </div >
        )
    }
}
export default Carousel
