import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/Button';

export default class App extends Component {

  constructor() {
    super();
    this.state = { 
      count: 0,
      fieldInput: '',
    };
  }

  countUp = () => {
    this.setState({
      count: parseInt(this.state.count) + 1
    });
  };

  countDown = () => {
    this.setState({
      count: parseInt(this.state.count) - 1
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      count: parseInt(this.state.fieldInput)
    });
    this.setState({ fieldInput: ''});
  };

  render() {
    let { count } = this.state;
    return (
      <div className = "App">
        <div className = "Counter">
          <h2>{ count }</h2>
        </div>
        <div className = "TextInputField">
          <form onSubmit={this.onSubmit}>
            <input 
              type="text" 
              name="fieldInput"
              style={{ flex: '10', padding: '5px' }} 
              placeholder="Set counter..."
              value={this.state.fieldInput}
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Submit"
              className="btn"
              style={{ flex: '1' }}    
            />
          </form>
        </div>
        <div className = "Buttons">
          <Button 
          title="Up" 
          task= { () => this.countUp() }
          />
          <Button 
          title="Down" 
          task= { () => this.countDown() }
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);