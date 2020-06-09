import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {startRemoveTodo} from "../actions/todos";



export const TodoItem = ({_id, text,completed, completedAt, startRemoveTodo,token}) =>{
    const onClickRemove = () => {
        console.log(token, _id)
        startRemoveTodo(token,_id);
    }
    return(
        <div>
            <Link to={`/todos/${_id}`}>
                <h3>{text}</h3>
            </Link>

            {completed ?<p>completed at : {moment(completedAt).format('MMMM Do, YYYY')}</p> : <p>not completed!</p> }

            <button onClick={onClickRemove}>Remove</button>
            <br/><br/>
        </div>
)}

const mapDispatchToProps = (dispatch) => ({
    startRemoveTodo : (token, id) => dispatch(startRemoveTodo(token, id))
})


const mapStateToProps = (state) => ({
    token : state.auth.user.token,
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)






