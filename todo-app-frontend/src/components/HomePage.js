import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <h1>Welcome to todo app !</h1>
        <h4>Please login or register to get started</h4>
        <button>
            <Link to ="/login">Login</Link>
        </button><br/><br/>
        <button>
            <Link to ="/register">Register</Link>
        </button>
        
    </div>
)