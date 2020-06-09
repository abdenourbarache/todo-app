import React from 'react';
import moment from 'moment';


export default class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            text : props.todo ? props.todo.text :  '',
            completed : props.todo ? props.todo.completed  : false,
            completedAt : props.todo ? props.todo.completedAt  : undefined,
            error : '',
            edit : props.edit 
        }
    }

    onTextChange = (e) => {
        const text = e.target.value ;
        this.setState(()=>({text}));
    }

    onCompletedChange = () => {
        this.setState((prevState) => ({
            completed: !prevState.completed,
            completedAt : !prevState.completed ? moment() : undefined
        }) )
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if (!this.state.text || !this.state.text.trim()) this.setState(() => ({error:'Please fill a valid text input'}));
        else this.props.onSubmit({
                text: this.state.text.trim(),
                completed : this.state.completed,
                completedAt : this.state.completedAt ? this.state.completedAt.valueOf() : undefined
            });
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        name="text"
                        id="text" 
                        placeholder="text" 
                        onChange={this.onTextChange}
                        value={this.state.text}/>
                        <br/><br/>
                     {
                        this.props.edit && 
                        <div>
                            Completed : 
                            <input
                            type="checkbox"
                            name="completed" 
                            id="completed" 
                            checked={this.state.completed} 
                            onChange={this.onCompletedChange}/>
                            <br/><br/>
                        </div>
                       
                        
                    }
                     
                    <button>Add</button>
                </form>
            </div>
        )
    }
}