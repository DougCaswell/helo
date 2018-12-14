import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUsername} from '../../ducks/reducer'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async register() {
        const {username, password} = this.state;
        const res = await axios.post('/auth/register', {username, password});
        console.log(res.data);
        this.props.updateUsername(res.data.username)
        this.setState({
            username: '',
            password: ''
        })
        if (res.data.loggedIn) {
            this.props.history.push('/dashboard');
        };
    };

    async login() {
        const {username, password} = this.state;
        const res = await axios.post('/auth/login', {username, password})
        console.log(res.data)
        this.props.updateUsername(res.data.username)
        this.setState({
            username: '',
            password: ''
        })
        if (res.data.loggedIn) {
            this.props.history.push('/dashboard');
        };
    };

    render() {
        return (
            <div>
                Username<input value={this.state.username} name='username' type='text' onChange={(event) => this.handleInputChange(event)} />
                Password<input value={this.state.password} name='password' type='text' onChange={(event) => this.handleInputChange(event)} />
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.register()}>Register</button>
            </div>
        );
    };
};

export default connect(null, {updateUsername})(Auth)