import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, browserHistory } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import App from '../src/components/App';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Summary from '../src/components/Summary';
import Styles from './styles/style.css';

ReactDOM.render((	
	<Router history={browserHistory}>
		<Switch>
			<Route exact path='/' component={App} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/register' component={Register} />
			<Route path='/about' component={About} />
		</Switch>
	</Router>
	),document.getElementById("app"));