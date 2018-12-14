import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            check: true,
            posts: []
        }
    }

    async componentDidMount() {
        let res = await axios.get('/api/posts/0')
        console.log(res)
        this.setState({
            posts: res.data
        })
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    toggleInputChange() {
        this.setState({
            check: !this.state.check
        })
    }

    render() {
        let displayPosts = this.state.posts.map(post => {
            return (
                <div className='post'>
                    <p>post.title</p>
                    <p>{post.username}</p>
                    <p>{post.profile_pic}</p>
                </div>
            )
        })
        return (
            <div>
                Dashboard
                Search<input name='search' type='text' value={this.state.search} onChange={(event) => this.handleInputChange(event)} />
                <button>Search</button>
                <button>Reset</button>
                My Posts<input name='check' id='check' type='checkbox' onClick={() => this.toggleInputChange()} defaultChecked />
                {displayPosts}
            </div>
        )
    }
}

export default Dashboard