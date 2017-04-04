
export function addNew(bugName){
    return { type : 'ADD_NEW', payload : bugName };
}

export function toggle(bug){
   return { type : 'TOGGLE', payload : bug };
}

export function removeClosed(){
	return { type : 'REMOVE_CLOSED'};
}
	