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
import ForgotPassword from './components/ForgotPassword';
import Gallary from './components/gallary';
import SelectComponent from './components/SelectComponent';

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

const active = sessionStorage.getItem('userData') ? true : false;

ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory} >
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/form-validation' component={FormComponent} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/select' component={SelectComponent} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/forgot-password' component={ForgotPassword} />	
				<Route path='/about' component={About} />
				<Route path='/gallary' component={Gallary} />
				<PrivateRoute exact path='/userlist' authed={active} component={UserList} />
				<PrivateRoute exact path='/life-cycle' authed={active} component={Parent} />
				<PrivateRoute exact path='/data-communication'authed={active} component={MainParent} />
				<PrivateRoute exact path='/dashboard' authed={active} component={Dashboard} />
			</Switch>
		</Router>
	</Provider>
), document.getElementById("app"));