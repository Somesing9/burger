var connection = require("./config/connection.js");

var tableName = "burgers";

var orm = {
	selectAll : function(callback) {
		var s = "SELECT * FROM" + tableName;

		connection.query(s, function(err, result) { 
			callback(result);
		});
	}

	insertOne: function(burger, callback) {
		var s = "INSERT INTO " + tableName 
	}
}