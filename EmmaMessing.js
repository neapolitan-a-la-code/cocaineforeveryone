var json = require("./countries.JSON");

		json.forEach(function(json){
			console.log(json.properties.NAME_LONG);
		});

