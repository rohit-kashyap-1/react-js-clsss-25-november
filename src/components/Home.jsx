import React, { Component } from 'react'
import Button from './Button'

import Message from './Message'

export default class Home extends Component {
    render(){
        return(
            <>
            <h1>{this.props.title}</h1>
            <h3>{this.props.num}</h3>
            <Button title="Get Started" type="green" />
            <Button title="Contact Us" type="red" />
            <Message msg="Congratulations, you have finished one task!" type="success" />
            <Message msg="Sorry, please try again.." type="" />
            </>
        )
    }
}
