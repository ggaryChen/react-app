import React , {Component} from 'react';
import {
    Route,
    Link,
} from 'react-router-dom';
class List extends Component {
    render() {
        return (
            <div>
                <Link to='/list/Garychen'>Garychen</Link>
                <Clock />
                <Reservation />
                <Route path={'/list/:id'} component={Garychen}/>    
            </div>
        );
    }
}
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
      <p>{this.state.isGoing?'Going':'NotGoing'}{this.state.numberOfGuests}</p>
      </div>
    );
  }
}

const Garychen = ({match})=> (
    <div>
        <h3>new messages</h3>
        <h3>{match.params.id}</h3>
    </div>
)
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }
export default List;
