import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Welcome to <br/> Todo-App !</h1>
            <p>Please login or register to get started</p>
            <button className="blue-button">
                <Link className="white-button-link" to ="/login">Login</Link>
            </button>
            <button className="green-button">
                <Link className ="white-button-link" to ="/register">Register</Link>
            </button>
        </div>
    </div>
)