import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ConfBotMXID from './tools/ConfBotMXID';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>t3chguy's Matrix Tools</h2>
                </div>
                <ConfBotMXID />
            </div>
        );
    }
}

export default App;
