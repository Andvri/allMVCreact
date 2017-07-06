import React from 'react';
import ReactDOM from 'react-dom';
import SPARouter from 'spa-router';
import Model from './models/task';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            context: 'all',
            pending: 0
        }
    }
    componentDidMount(){
        Model.observe(
            (state) => {
                this.setState(
                    {
                        pending: Model.active().length
                    }
                )
            }
        );
        SPARouter.listen(
            {
                '/': this.setState.bind(this, {context: 'all'}),
                '/active': this.setState.bind(this, {context: 'active'}),
                '/completed': this.setState.bind(this, {context: 'completed'})
            }
        );
        SPARouter.path('');
    }

    render(){
        return(
            <div>
                <Header/>
                <Content dataSource= { Model[this.state.context]() }/>
                <Footer context= {this.state.context} pending= {this.state.pending}/>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementsByClassName('todoapp')[0] );