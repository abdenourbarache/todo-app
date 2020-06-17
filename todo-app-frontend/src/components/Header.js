import React from 'react';
import {Link} from 'react-router-dom';

import Logout from './Logout';
export default () =>{
    return (
        <header className="header">
            <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Todo-App</h1>
                </Link>
                <Logout />
            </div>
            </div>  
        </header>
    )
}