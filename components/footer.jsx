import React from 'react';
import Task from '../models/task.js';

export default class Footer extends React.Component{
    static propTypes = {
        context: React.PropTypes.string,
        pending: React.PropTypes.number
    }

    static defaultProps = {
        pending: 0
    }

    state ={
        context:[
            {href: '#/', caption: 'All'},
            {href: '#/active', caption: 'Active'},
            {href: '#/completed', caption: 'Completed'}
        ]
    };

    handleClearCompleted = (event) =>{
        var tasks = Task.completed();
        for(var i = 0, len = tasks.length; i < len; i++){
            tasks[i].destroy();
        }
    };

    render(){
        var context = this.props.context;
        return (
            <footer className='footer'>
                <span className="todo-count"><strong>{this.props.pending}</strong> item left </span>
                <ul className="filters">
                    {
                        this.state.context.map(
                            function (item, index) {
                                let className = item.caption.toLocaleLowerCase() == context ? 'selected:' : '';
                                return(
                                    <li key={index}>
                                        <a href={item.href} className={className}>
                                            {item.caption}
                                        </a>
                                    </li>
                                );
                            }
                        )
                    }
                </ul>
                <button className='clear-completed' onClick={this.handleClearCompleted}>
                    Clear Completed
                </button>
            </footer>
        )
    }
}