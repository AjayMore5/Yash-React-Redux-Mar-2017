function bugsReducer(currentState = [], action){
	switch(action.type){
		case 'ADD_NEW':
			var bugName = action.payload;
			var maxId = currentState.length ? currentState.reduce((result, bug) => result > bug.id ? result : bug.id, 0) + 1 : 1;
			var newBug = {
				id : maxId,
				name : bugName,
				isClosed : false,
				createdAt : new Date()
			};
			return currentState.concat([newBug]);

		case 'TOGGLE':
			var bugToToggle = action.payload;
			return currentState.map(bug => 
				bug === bugToToggle ? Object.assign({}, bugToToggle, {isClosed : !bugToToggle.isClosed}) : bug
			);
		case 'REMOVE_CLOSED':
			return currentState.filter(bug => !bug.isClosed);
		default:
			return currentState;
	}
}
export default bugsReducer;
