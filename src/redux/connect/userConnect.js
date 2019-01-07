import { connect } from 'react-redux';
import { setUserList } from './../actions/index';

const mapDispatchToProps = dispatch => ({
	setUserList: (payload) => {
		dispatch(setUserList(payload));
	},
});

const mapStateToProps = state => ({
	userlist: state.userReducer.users,
});

export default connect(mapStateToProps, mapDispatchToProps);
