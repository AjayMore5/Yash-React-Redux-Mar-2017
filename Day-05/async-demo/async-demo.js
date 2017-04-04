var app = (function(){
	function addSync(x,y){
		console.log(`		[Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`		[Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[Consumer] triggerind addSync`);
		var result = addSync(x,y);
		console.log(`[Consumer] result = ${result}`);
	}

	function addAsync(x,y, onResult){
		console.log(`		[Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`		[Service] returning result`);
			if (typeof onResult === 'function')
				onResult(result);
		}, 3000);
	}

	function addAsyncClient(x,y){
		console.log(`[Consumer] triggerind addAsync`);
		addAsync(x,y, function(result){
			console.log(`[Consumer] result = ${result}`);
		});
	}

	var addAsyncEvents = (function(){
		var _subscribers = [];

		function subscribe(subscriptionFn){
			if (typeof subscriptionFn === 'function')
				_subscribers.push(subscriptionFn);
		}
		function add(x,y){
			console.log(`		[Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`		[Service] returning result`);
				_subscribers.forEach(subscriber => subscriber(result));
			}, 3000);
		}
		return {
			subscribe : subscribe,
			add : add
		}
	})();

	function addAsyncPromise(x,y){
		var promise = new Promise(function(resolveFn, rejectFn){
			console.log(`		[Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`		[Service] returning result`);
				resolveFn(result);
			}, 3000);
		});
		return promise;
	}


	return {
		addAsyncClient : addAsyncClient,
		addSyncClient : addSyncClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	}	
})();