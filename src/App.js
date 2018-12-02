import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const INTERVAL = 100;

class App extends Component {
	
    constructor(props) {
		super(props);
		this.state = {value: 0, stopped: false};
		
		// Привязка необходима, чтобы сделать this доступным в коллбэке
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
    }

    increment(){
		if(!this.state.stopped) (this.setState({value: this.state.value + 1}));
    }

    componentDidMount() {
		this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
    }

    componentWillUnmount() {
		clearInterval(this.timerID);
    }
	
	stopTimer(){
		clearInterval(this.timerID);
	}

	resetTimer(){
		this.setState({value: 0});		
	}

    render() {
		const value = this.state.value;
		document.title = "Таймер: "+Math.floor(value/INTERVAL/60/60)+":"
		+Math.round(value/INTERVAL/60)+":"+Math.round(value/INTERVAL)+"."+(value % INTERVAL);
		return (
			<div class="container-fluid align-items-center">
				<h1 class="display-1">Таймер</h1>
				<h1 class="display-1">
					<span><kbd>{Math.floor(value/INTERVAL/60/60)}</kbd> : </span>
					<span><kbd>{Math.floor(value/INTERVAL/60) % 60}</kbd> : </span>
					<span><kbd>{Math.floor(value/INTERVAL) % 60}</kbd> . </span>
					<span><kbd>{value % INTERVAL < 10 ? '0' : ''}{value % INTERVAL}</kbd></span>
				</h1>		
				<div>
					<button class="display-4" onClick={this.stopTimer}>Остановить</button>&nbsp;
					<button class="display-4" onClick={this.resetTimer}>Сбросить</button>
				</div>
			</div>
		);
    }
}

export default App;
