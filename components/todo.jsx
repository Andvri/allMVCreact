import React from 'react';


export default class Todo extends React.Component{
    static propTypes={
        data: React.PropTypes.object
    };

    state = {
        data: this.props.data,
        editing: false,
        value: this.props.data.name
    }
    
    handleToggle = (event) => {
        this.state.data.completed = !this.state.data.completed;
    };

    handleEdit = (event) => {
        this.setState(
            {
                editing: true
            }
        );
    };

    handleDestoy = (event) => {
        this.state.data.destroy();
    };

    handleKeyDown = (event) => {
        if(event.keyCode === 13){
            this.state.data.name = event.target.value;
            this.setState(
                {
                    editing: false
                }
            );
        }
    };

    handleChange = (event) => {
        this.setState(
            {
                value: event.target.value
            }
        );
    };

    render(){
        let className = '';
        if(this.state.data.completed){
            className += ' completed';
        }
        if(this.state.editing){
            className += ' editing';
        }

        return (
            <li>
                <div className="view">
                    <input type="checkbox" className='toggle' checked={this.state.data.completed} onChange={this.handleToggle}/>
                    <label onDoubleClick={this.handleEdit}>{this.state.value}</label>
                    <button className='destroy' onClick={this.handleDestoy}> Destroy </button>
                </div>
                <input type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.value}/>
            </li>
        )
    }
}

