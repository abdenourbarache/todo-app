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
                ref={register({ 
                            required: 'This field is required',
                            validate: value => validator.isEmail(value) || 'Please set a valid email' })} />
            {errors.email && <span>{errors.email.message}</span>}

            <br/><br/>
            
            <input 
                type="password" 
                name="password" 
                id="password"
                placeholder ="Password"
                ref={register({ 
                            required: 'This field is required',
                            minLength: {
                                value :6,
                                message : 'Password must containe at least 6 caracteres'}})} />
            {errors.password && <span>{errors.password.message}</span>}
            
            <br/><br/>
            
            <input 
                type="password" 
                name="passwordConfirmation"
                placeholder ="Confirm password" 
                ref={register({ 
                    required: 'This field is required',
                    validate: value => value === document.getElementById("password").value || 'Please confirme your password'})}/>
            {errors.passwordConfirmation && <span>{errors.passwordConfirmation.message}</span>}
            
            <br/><br/>
            
            <button>Register</button>
      </form>
    );
  }

