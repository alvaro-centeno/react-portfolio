import React from 'react';
import Jumbo from '../Jumbo';
import Content from '../Content';
import Forms from '../Form';


class Contact extends React.Component {

    render() {
        return (
            <div>
                <Jumbo title={this.props.title} />
                <Content >
                    <Forms />
                </Content>
            </div >
        )
    }
}

export default Contact
