import React from 'react';
import {connect} from 'react-redux';

import TodoForm from './TodoForm';
import { startEditTodo } from '../actions/todos';

class TodoPage extends React.Component{

    onSubmit = (todo) => {
        this.props.startEditTodo(this.props.token, this.props.todo._id, todo,  () =>{
            this.props.history.push("/dashboard");
        });
    }


    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <div className="page-header__box">
                            <h1 className="page-header__title">Update todo</h1>
                        </div>
                    </div>
                </div>
                <TodoForm todo = {this.props.todo} onSubmit = {this.onSubmit} edit={true}/>
                
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    startEditTodo : (token, id, todo, callback) => dispatch(startEditTodo(token, id, todo, callback))
});

const mapStateToProps = (state, props) => ({
    todo : state.todos.find((todo) => (todo._id === props.match.params.id)),
    token : state.auth.user.token
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoPage);