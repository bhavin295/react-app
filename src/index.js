import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, browserHistory, Redirect } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import Parent from '../src/life-cycle/Parent';
import MainParent from '../src/data-communication/main_parent'
import FormComponent from '../src/form-validation/FormComponent'
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import About from '../src/components/About';
import Dashboard from '../src/components/Dashboard';
import UserList from '../src/components/UserList';
import Styles from './styles/style.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './redux/store/index'

const PrivateRoute = ({ component: Component, authed }) => {
	return (
		<Route
			render={props =>
				authed ? (
					<Component {...props} />
				) : (
						<Redirect to={{ pathname: "/login" }} />
					)
			}
		/>
	);
};

const active = localStorage.getItem('userData') ? true : false;

ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory} >
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/life-cycle' component={Parent} />
				<Route exact path='/data-communication' component={MainParent} />
				<Route exact path='/form-validation' component={FormComponent} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				<Route path='/about' component={About} />
				<PrivateRoute exact path='/userlist' authed={active} component={UserList} />
				<PrivateRoute exact path='/dashboard' authed={active} component={Dashboard} />
			</Switch>
		</Router>
	</Provider>
), document.getElementById("app"));