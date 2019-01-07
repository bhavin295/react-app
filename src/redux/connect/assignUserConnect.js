import { connect } from 'react-redux';
import { getAssignUser } from './../actions/index';

const mapDispatchToProps = dispatch => ({
	getAssignUser: (payload) => {
		dispatch(usersAction(payload));
	},
});

const mapStateToProps = state => ({
	assignUserName: state.assignUserReducer.assignUser,
});

export default connect(mapStateToProps, mapDispatchToProps);
