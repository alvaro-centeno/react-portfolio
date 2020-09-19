import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Jumbo = (props) => {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        {props.title && <h1>{props.title}</h1>}
                        {props.subTitle && <h3>{props.subTitle}</h3>}
                        {props.text && <h3>{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Jumbo;
