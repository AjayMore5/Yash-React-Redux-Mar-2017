import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './BugStats';
import BugEdit from './BugEdit';
import BugList from './BugList';

import * as bugActions from '../actions/bugActions';
console.log(bugActions);

class BugTracker extends Component{
	render(){
		console.log(this.props);
		var bugs = this.props.bugs;
		return (
			<div>
				<BugStats bugs={bugs}></BugStats>
				<BugEdit onAddNew={this.props.addNew}></BugEdit>
				<BugList 
					bugs={bugs} 
					onRemoveClosed={this.props.removeClosed}
					onToggle={this.props.toggle}
				></BugList>
			</div>
		)
	}
}


//React-Redux
/*function mapStateToProps(state){
	return {
		bugs : state.bugsData
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(bugActions, dispatch);	
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);*/

export default connect(
	({bugsData}) => ({bugs : bugsData}), 
	(dispatch) => bindActionCreators(bugActions, dispatch)
)(BugTracker);










