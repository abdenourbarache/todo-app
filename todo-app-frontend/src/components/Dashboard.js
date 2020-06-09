import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import TodoList from './TodoList';
import Logout from './Logout';

import Loading from './Loading';

export const Dashboard = (props) => {
    return(

        <div> 
            {props.loading ? (
                <Loading/>
            ) : (
                <div>
                    <h2>This is dashboard</h2>  
                    <button><Link to="/create">Add New todo</Link></button>
                    <TodoList />
                    <Logout />
                </div>
            )} 
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading : state.loading,
    
})

export default connect(mapStateToProps)(Dashboard);