import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import OutputArea from './components/OutputArea';
import Button from './components/Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentExcuse: 'test excuse'
        }
    }
    handleClick(e) {

        console.log(e.target.name + " button clicked");
        this.setState({currentExcuse: 'new excuse'});
    }
  render() {
    return (
      <div className="App">
          <Header />
          <OutputArea excuse={this.state.currentExcuse}/>
          <Button clickEvent = {this.handleClick.bind(this)}
              name="Get Excuse" />
          
      </div>
    );
  }
}

export default App;
