if (window._postMessage === undefined) {
	var _postMessage = function (event_name, domain, target_window, data) {
		var messageObject = {
			event_name: event_name,
			data: data
		};
		
		target_window.postMessage(messageObject, domain);
	};
}

if (window._getMessage === undefined) {
	var _getMessage = function (event_name, domain, callback) {
		(function (event_name, domain, callback) {
			window.addEventListener('message', function(e) {
			  var recieved_message = e.data;
			  if (recieved_message.event_name && recieved_message.event_name == event_name) {
			  	if (callback) {
			  		callback(recieved_message.data, e);
			  	}
			  }
			});
		})(event_name, domain, callback);
	};
}

if (window._log === undefined) {
	window._log = function () {
		console.log(arguments);
	};
}

