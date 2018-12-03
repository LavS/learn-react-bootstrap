import React, { Component } from 'react';
import './App.css';

const INTERVAL = 100;

class App extends Component {
	
    constructor(props) {
		super(props);
		this.state = {value: 0, stopped: false};
    }

    increment(){
		if(!this.state.stopped) (this.setState({value: this.state.value + 1}));
    }
	
	stopTimer = () => {
		this.setState({stopped: !this.state.stopped});
		if(this.state.stopped){
			clearInterval(this.timerID);
		}
		else
		{
			this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
		};
	}

	resetTimer = () => {
		this.setState({value: 0});		
	}

    componentDidMount() {
		this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
    }

    componentWillUnmount() {
		clearInterval(this.timerID);
    }

	componentDidUpdate(){
		const value = this.state.value;
		if (this.state.stopped) document.title = "Таймер";
		else document.title = "Таймер: "+Math.floor(value/INTERVAL/60/60)+":"+Math.floor(value/INTERVAL/60) % 60+":"+Math.floor(value/INTERVAL) % 60;
	}
	
    render() {
		const value = this.state.value;
		return (
			<div className="container-fluid align-items-center">
				<h1 className="display-1">Таймер</h1>
				<h1 className="display-1">
					<span><kbd>{Math.floor(value/INTERVAL/60/60)}</kbd> : </span>
					<span><kbd>{Math.floor(value/INTERVAL/60) % 60}</kbd> : </span>
					<span><kbd>{Math.floor(value/INTERVAL) % 60}</kbd> . </span>
					<span><kbd>{value % INTERVAL < 10 ? '0' : ''}{value % INTERVAL}</kbd></span>
				</h1>		
				<div>
					<button className="display-4" onClick={this.stopTimer}>{this.state.stopped?'Продолжить':'Остановить'}</button>&nbsp;
					<button className="display-4" onClick={this.resetTimer}>Сбросить</button>
				</div>
			</div>
		);
    }
}

export default App;