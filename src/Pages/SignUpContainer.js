import React, { Component } from 'react';
import SignUpForm from '../PageComponents/SignUpForm';

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            pwverify: '',
            email: '',
        }
    }
    render() {
        let updateState = (keyvalue, string) =>
            this.setState({[keyvalue]: string})

        return <SignUpForm {...this.state} update={updateState}/>
    }  
}

export default SignUpContainer;