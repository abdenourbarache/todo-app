import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import TodoList from './TodoList';


export const Dashboard = (props) => {
    return(
        <div>
            <div className="page-header">
                <div className="content-container">
                    <div className="page-header__box">
                        <div>
                            <h1 className="page-header__title">Dashboard</h1>
                            <p>You have total of {props.totalTodos} {props.totalTodos > 1 ? "todos" : "todo"}</p>
                        </div>
                        <button className="green-button">
                            <Link className="white-button-link" to="/create">Add New todo</Link>
                        </button>
                    </div>
                </div>
            </div>
            <TodoList />
        </div>
    )
}

const mapStateToProps = (state) => ({
    totalTodos : state.todos.length
})

export default connect(mapStateToProps)(Dashboard);