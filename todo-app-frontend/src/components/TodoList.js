import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

export const TodoList = (props) => (
    <div>
   
        
        {props.todos.length >0 ? 
            <div>
                <h4>My todos list</h4>
                {props.todos.map((todo) => (
                    <TodoItem {...todo} key={todo._id} />
                ))}
            </div> 
            :
        <h3>no todos!</h3>}

    </div>
)


const mapStateToProps = (state) => ({
    todos : state.todos
})

export default connect(mapStateToProps)(TodoList);