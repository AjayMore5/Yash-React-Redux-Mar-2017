import React , {Component} from 'react';
import BugItem from './BugItem';

export default class BugList extends Component{
	render(){
		
		var bugItems = this.props.bugs.map(bug => 
			(<BugItem key={bug.id} bug={bug} onToggle={this.props.onToggle}></BugItem>)
		);
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={this.props.onRemoveClosed}/>
			</section>
		);
	}
}