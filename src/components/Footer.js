import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <footer className="mt-5"
            // style={{
            //     position: 'absolute',
            //     bottom: '0',
            //     width: '100%',
            //     height: '2.5rem',
            //     marginTop: '20%'
            // }}
            >
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                        <Col className="p-0" md={3} sm={12}>
                        </Col>
                        <Col className="p=0 d-flex justify-content-end" md={3}>
                            Created on React by Alvaro Centeno
                        </Col>
                    </Row>
                </Container>

            </footer>

        </>
    )
}

export default Footer;
