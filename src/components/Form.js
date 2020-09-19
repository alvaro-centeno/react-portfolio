import React from 'react'
import { Form, Button } from 'react-bootstrap'

class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true,
        });
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} style={{ marginBottom: '10%', marginTop: '10%' }} >
                    <Form.Group>
                        <Form.Label htmlFor='full-name'>Name</Form.Label>
                        <Form.Control id='full-name' name='name' type="text" value={this.state.name} onChange={this.handleChange} placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control id='email' name='email' type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='phone'>Phone</Form.Label>
                        <Form.Control id='phone' name='phone' type="text" value={this.state.phone} onChange={this.handleChange} placeholder="(555) 123-4567" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='message'>Message</Form.Label>
                        <Form.Control id='message' name='message' value={this.state.message} onChange={this.handleChange} as="textarea" rows={3} />
                    </Form.Group>
                    <Button className='d-inline-block' variant="primary" type="submit" disabled={this.state.disabled}>
                        Send
  </Button>

                    {this.state.emailSent === true && <p className='d-inline success-msg'>Message Sent</p>}
                    {this.state.emailSent === false && <p className='d-inline err-msg'>Message Not Sent</p>}
                </Form>
            </div >
        )
    }
}

export default Forms;
