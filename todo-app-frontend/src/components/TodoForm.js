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
            <div className="content-container">
                {this.state.error && <p className="error-message">{this.state.error}</p>}
                <form  className ="form"onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        name="text"
                        id="text" 
                        placeholder="Description"
                        className="text-input" 
                        autoComplete="off"
                        onChange={this.onTextChange}
                        value={this.state.text}/>
                     {
                        this.props.edit && 
                        <div className="checkbox-container">
                            Completed : 
                            <label className="toggleButton">
                            <input
                                    type="checkbox"
                                    name="completed" 
                                    id="completed" 
                                    checked={this.state.completed} 
                                    onChange={this.onCompletedChange}/>
                                    <div className="checkbox-svg">
                                        <svg viewBox="0 0 44 44">
                                            <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                                        </svg>
                                    </div> 
                            </label>
                        </div>   
                    }
                    <div>
                    <button className="green-button">
                        {!this.props.edit ?"Add Todo" : "Update Todo"}
                        </button>
                    </div>
                    
                </form>
            </div>
        )
    }
}