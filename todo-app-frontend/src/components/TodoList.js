import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

export const TodoList = (props) => (
    <div>
        <div className="content-container">
            <div className="list-header">
                <div className="mobile-dispaly">Todo</div>
                <div className="desktop-dispaly">Todo</div>
                <div className="desktop-dispaly">Remove</div>
            </div>
            {props.todos.length >0 ? 
                <div className="list-body">
                    {props.todos.map((todo) => (
                        <TodoItem {...todo} key={todo._id} />
                    ))}
                </div> 
                :
                <div className="list-item list-item__no-item list-body">
                    <h3 className="list-item__title">no todos!</h3>
                </div>
                
                }

        </div>
    </div>
)


const mapStateToProps = (state) => ({
    todos : state.todos
})

export default connect(mapStateToProps)(TodoList);