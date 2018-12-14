import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {
    let path = props.location.pathname
    return ((path === '/') ? null : (
        <div className='Nav'>
            Nav
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/post/1'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
            <p>{props.username}</p>
            <img src={props.profilePic} alt='' />
        </div>
    ))
}

const mapStateToProps = (reduxState) => {
    return { username: reduxState.username, profilePic: reduxState.profilePic }
}

export default connect(mapStateToProps)(withRouter(Nav))