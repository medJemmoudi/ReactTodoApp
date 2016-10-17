var dataProvider = {
	getAllTodo: function() {
		var defer = $.Deferred();
		var $_data = [];
		$.getJSON('http://railsblog.dev:3000/todos.json', function(data){
			_.each(data, function( el ){
				$_data.push({
					text: el.text,
					id: el.id
				});
			});
			defer.resolve($_data);
		});

		return defer.promise();
	},

	findOneTodo: function (todoId) {
		//
	},

	removeTodo: function (todoId) {
		var defer = $.Deferred();

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://railsblog.dev:3000/todos/"+ todoId +".json",
		  "method": "DELETE",
		  "headers": {
		    "content-type": "application/json",
		    "cache-control": "no-cache"
		  },
		  "processData": false,
		  "data": JSON.stringify(null)
		};

		$.ajax(settings).done(function (response) {
		  defer.resolve(response);
		});

		return defer.promise();
	},

	addTodo: function( todo ) {
		var defer = $.Deferred();

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://railsblog.dev:3000/todos.json",
		  "method": "POST",
		  "headers": {
		    "content-type": "application/json",
		    "cache-control": "no-cache"
		  },
		  "processData": false,
		  "data": JSON.stringify(todo)
		};

		console.log(settings);

		$.ajax(settings).done(function (response) {
		  defer.resolve(response);
		});

		return defer.promise();
	}
}