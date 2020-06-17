import React from 'react';
import validator from "validator";
import {useForm} from "react-hook-form";

export default (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => props.onSubmit(data);
  
    //console.log(errors);
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="email"
                name="email"
                placeholder="Email"
                className="text-input" 
                ref={register({ 
                            required: 'This field is required',
                            validate: value => validator.isEmail(value) || 'Please set a valid email' })} />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            
            <input 
                type="password" 
                name="password" 
                id="password"
                placeholder ="Password"
                className="text-input"
                ref={register({ 
                            required: 'This field is required',
                            minLength: {
                                value :6,
                                message : 'Password must containe at least 6 caracteres'}})} />
            {errors.password && <p  className="error-message">{errors.password.message}</p>}

            <input 
                type="password" 
                name="passwordConfirmation"
                placeholder ="Confirm password"
                className="text-input" 
                ref={register({ 
                    required: 'This field is required',
                    validate: value => value === document.getElementById("password").value || 'Please confirme your password'})}/>
            {errors.passwordConfirmation && <p className="error-message">{errors.passwordConfirmation.message}</p>}
            <button className="green-button">Register</button>
      </form>
    );
  }

