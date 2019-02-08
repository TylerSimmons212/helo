import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';

function Nav (props) {
    return (
        <div>
            Nav
            {props.location.pathname === '/' ? null : 
                <div>
                 <Link to='/dashboard'><button>Home</button></Link>
                 <Link to='new'><button>New Post</button></Link>
                 <Link to='/'><button>Logout</button></Link>
                </div>}
        </div>
    )
}

function mapStateToProps (state) {
    let {id, username, profile_pic} = state
    return {
        id, 
        username,
        profile_pic
    }
}
const mapDispatchToProps = {
    updateUser
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));