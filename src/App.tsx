import { Component } from 'react';
import './App.css';
import DeveloperBoard from './components/developerBoard/developerBoard';
import Performance from './components/performanceBoard/performanceBoard';

class App extends Component {

  developerNames: string[];
  constructor(props: {}) {
    super(props)
    this.developerNames = ["Krishnaveni", "Praveen", "Mohan", "Mathan", "Asif"];
  }
  render() {
    return (
      <div className="parentContainer">
        <DeveloperBoard name={this.developerNames} />
        <Performance />
      </div>
    );
  }
}

export default App;
