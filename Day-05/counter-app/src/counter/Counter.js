import React , { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component{
	onIncrementClick(){
		this.props.dispatch({type : 'INCREMENT'});
	}
	onDecrementClick(){
		this.props.dispatch({type : 'DECREMENT'});
	}
	render(){
		return(
			<div>
				<input type="button" value="Increment" onClick={this.onIncrementClick.bind(this)}/>
				<span> {this.props.counterData} </span>
				<input type="button" value="Decrement" onClick={this.onDecrementClick.bind(this)}/>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		counterData : state	
	}
}

function mapDispatchToProps(dispatch){
	return {
		dispatch : dispatch
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);




