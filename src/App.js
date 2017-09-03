import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Index from './component/index';
import List from './component/list';
import About from './component/about';
const gohome = () => {
    return (
        <Redirect push to="/" />
    )
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Index} />
                <Route exact path='/index' component={gohome} />
                <Route path='/list' component={List} />
                <Route exact path='/about' component={About} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
