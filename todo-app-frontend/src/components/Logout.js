import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {startLogout} from './../actions/auth';

export class Logout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        }
    }

    onLogoutClick = () =>{
        this.props.startLogout(this.props.token);
        this.setState(() => ({ redirect: '/'}));
    } 

    render(){
        {
            if (this.state.redirect) return <Redirect to={this.state.redirect} />
            return (
                <button className="logout-button" onClick={this.onLogoutClick}>Logout</button>
            )   
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout : (token) => dispatch(startLogout(token))
});

const mapStateToProps = (state) => ({
    token : state.auth.user.token,
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Logout);