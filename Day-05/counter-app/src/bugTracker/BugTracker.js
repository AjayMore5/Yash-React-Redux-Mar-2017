import React , { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import BugStats from './BugStats';
import BugEdit from './BugEdit';
import BugList from './BugList';

import * as bugActions from '../actions/bugActions';
console.log(bugActions);

class BugTracker extends Component{
	constructor(){
		super();

	}
	componentDidMount(){
		this.props.getAll();
	}
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

function getActionCreators(actions, dispatch){
	var resultActions = {};
	for(var key in actions){
		resultActions[key] = actions[key](dispatch);
	}
	console.log('resultActions =', resultActions);
	return resultActions;
}


export default connect(
	({bugsData}) => ({bugs : bugsData}), 
	(dispatch) => getActionCreators(bugActions, dispatch)
)(BugTracker);










