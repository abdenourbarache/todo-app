import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {startRemoveTodo} from "../actions/todos";



export const TodoItem = ({_id, text,completed, completedAt, startRemoveTodo,token}) =>{
    const onClickRemove = () => {
        startRemoveTodo(token,_id);
    }
    return(
            <div className="list-item">
                <Link className="list-item__link" to={`/todos/${_id}`}>
                    <div>
                        <h3 className="list-item__title">{text}</h3>
                        {completed ?<small>completed at : {moment(completedAt).format('MMMM Do, YYYY')}</small> :
                            <small>Not completed!</small> } 
                    </div>
                </Link>
                <img src="/img/remove.png" alt="remove" className="remove-img" onClick={onClickRemove}/>
            </div>
           
)}

const mapDispatchToProps = (dispatch) => ({
    startRemoveTodo : (token, id) => dispatch(startRemoveTodo(token, id))
})


const mapStateToProps = (state) => ({
    token : state.auth.user.token,
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)






