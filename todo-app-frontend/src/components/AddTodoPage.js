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
                <div className="page-header">
                    <div className="content-container">
                        <div className="page-header__box">
                            <h1 className="page-header__title">Add todo</h1>
                        </div>
                    </div>
                </div>
                <TodoForm onSubmit={this.onSubmit}/>
                {this.state.error && <p>{this.state.error}</p>}
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
