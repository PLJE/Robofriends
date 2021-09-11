import React , {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from '../robots'; //because not default
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './APP.css';

 class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount(){ //make an AJAX request using fetch API
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }

    //It does not come from react like constructor or render,
    //you should use arrow function 
    //this scope is different between arrow func vs (){} 
    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
    }
    render() {
        //const {robots, searchfield} = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>roboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;