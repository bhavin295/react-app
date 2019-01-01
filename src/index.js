import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, browserHistory } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from './components/Home';
import Parent from '../src/life-cycle/Parent';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import About from '../src/components/About';
import Styles from './styles/style.css';

ReactDOM.render((	
	<Router history={browserHistory}>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/life-cycle' component={Parent} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/register' component={Register} />
			<Route path='/about' component={About} />
		</Switch>
	</Router>
	),document.getElementById("app"));