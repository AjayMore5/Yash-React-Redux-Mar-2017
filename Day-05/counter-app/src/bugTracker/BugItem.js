import React , {Component} from 'react';
export default class BugItem extends Component{
	toggle(bug){
		this.props.onToggle(bug);
	}
	render(){
		var bug = this.props.bug;
		var bugClass = bug.isClosed ? 'bugname closed' : 'bugname';
		return (
			<li>
				<span className={bugClass} onClick={this.toggle.bind(this, bug)}>{bug.name}</span>
				<div><i>{bug.isClosed.toString()}</i></div>
				<div className="datetime">{bug.createdAt.toString()}</div>
			</li>
		)
	}
}