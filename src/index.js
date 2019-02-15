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

const PrivateRoute = ({ component: Component }) => {
	return (
		<Route
			render={props =>
				sessionStorage.getItem('userData') ? (
					<Component {...props} />
				) : (
						<Redirect to={{ pathname: "/login" }} />
					)
			}
		/>
	);
};

ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory} >
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/home' component={Home} />
				<Route path='/form-validation' component={FormComponent} />
				<Route path='/login' component={Login} />
				<Route path='/select' component={SelectComponent} />
				<Route path='/register' component={Register} />
				<Route path='/forgot-password' component={ForgotPassword} />
				<Route path='/gallary' component={Gallary} />
				<Route path='/about' component={About} />
				<PrivateRoute path='/userlist' component={UserList} />
				<PrivateRoute path='/life-cycle' component={Parent} />
				<PrivateRoute path='/data-communication' component={MainParent} />
				<PrivateRoute path='/dashboard' component={Dashboard} />
			</Switch>
		</Router>
	</Provider>
), document.getElementById("app"));