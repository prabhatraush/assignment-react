import React, { Component } from 'react'
import Login from './components/Login';
import Application from './components/Application';
import 'antd/dist/antd.css';
import './App.css';
import Header from './components/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Highlighter from './components/Highlighter';
import { isAlreadyIn } from './redux/user/actions';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    // authenticate token with server.
    this.props.isAlreadyIn();
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.isHighlight ? <Highlighter/> :""}
        <div className="container">
        <Switch>
        
        <Route exact path="/"> 
          {!this.props.isLoggedIn ? <Login /> : <Redirect to="/add-post" />}
        </Route>
        <Route exact path="/add-post"> 
          {this.props.isLoggedIn ? <Application /> : <Redirect to="/" />}
        </Route>
        
        </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  isHighlight: state.highlight.isHighlight
});

export default connect(mapStateToProps, {isAlreadyIn})(App);

