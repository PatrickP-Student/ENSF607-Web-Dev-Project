import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/Button';
// import "bulma/css/bulma.css"

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      fieldInput: '',
    };
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  countDown = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  onChange = (e) => {
    if (isNaN(e.target.value)) return;
    if (e.target.value == '') {
      this.setState({ [e.target.name]: 0 });
      return;
    }
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      count: this.state.fieldInput
    });
    this.setState({ fieldInput: '' });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="Counter">
            <h1>
              <div class="dividerHuge" />
              <strong>{count}</strong>
            </h1>
          </div>
          <div className="TextInputField">
            <form onSubmit={this.onSubmit}>
              <div class="dividerBig" />
              <input
                type="text"
                name="fieldInput"
                style={inputBox}
                width="200%"
                placeholder="Set counter..."
                value={this.state.fieldInput}
                onChange={this.onChange}
              />
              <input
                type="submit"
                font-size="125%"
                value="Submit"
                className="btn"
                style={submitbutton}
              />
            </form>
          </div>
          <div className="Buttons">
            <div class="dividerBig" />
            <Button
              title="Up"
              task={() => this.countUp()}
            />
            <div class="dividerSmall" />
            <Button
              title="Down"
              task={() => this.countDown()}
            />
          </div>
        </div>
      </div>
    );
  }
} export default App;

const inputBox = {
  background: 'AliceBlue',
  width: '15%',
  padding: '5px',
  margin: '8px 0',
}

const submitbutton = {
  background: 'MediumAquaMarine',
  color: 'Black',
  border: 'none',
  bordercolor: 'DarkGray',
  padding: '7px 12px',
  borderRadius: '2px',
  cursor: 'pointer',
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);