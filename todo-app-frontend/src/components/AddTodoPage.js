import React from 'react';
import {connect} from 'react-redux';

import TodoForm from './TodoForm';
import {startAddTodo} from './../actions/todos';

class AddTodoPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : ''
        }
    }

    onSubmit = (todo) => {
        this.props.startAddTodo(this.props.user.token, todo, () =>{
            this.props.history.push("/dashboard");
        });
    }

    render() {
        return (
            <div>
                <h2>Add todo</h2>
                {this.state.error && <p>{this.state.error}</p>}
                <TodoForm onSubmit={this.onSubmit}/>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    startAddTodo : (token, todo, callback) => dispatch(startAddTodo(token, todo, callback))

});

const mapStateToProps = (state) => ({
    user : state.auth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoPage);
