import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const INTERVAL = 100;

class App extends Component {
	
    constructor(props) {
		super(props);
		this.state = {value: 0};
    }

    increment(){
		this.setState({value: this.state.value + 1});
    }

    componentDidMount() {
		this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
    }

    componentWillUnmount() {
		clearInterval(this.timerID);
    }

    render() {
		const value = this.state.value
		return (
			<div>
				<p>Таймер:</p>
				<p>
					<span>{Math.floor(value/INTERVAL/60/60)} : </span>
					<span>{Math.floor(value/INTERVAL/60) % 60} : </span>
					<span>{Math.floor(value/INTERVAL) % 60} . </span>
					<span>{value % INTERVAL}</span>
				</p>
			</div>
		);
    }
}

export default App;
