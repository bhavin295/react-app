import { connect } from 'react-redux';
import { getNewPassword } from './../actions/index';

const mapDispatchToProps = dispatch => ({
	getNewPassword: (payload) => {
		dispatch(usersAction(payload));
	},
});

const mapStateToProps = state => ({
	NewPassword: state.passwordReducer.password,
});

export default connect(mapStateToProps, mapDispatchToProps);
