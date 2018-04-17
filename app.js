var express = require('express');
var mysql = require("mysql");
var bodyParser = require('body-parser');

var app = express();
var server = app.listen(3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'comments'
	});
	res.locals.connection.connect();
	next();
});

app.get('/api/comments', function(req, res, next) {
	res.locals.connection.query('SELECT * from comments', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

app.get('/api/comments/s', function(req, res, next) {
	var Id = req.body.Id;

	if (Id == undefined) {
		res.send(JSON.stringify({"status": 500, "error": error, "response": 'missing attribute in request'})); 
	} else {
		res.locals.connection.query('SELECT * from comments where id=?', [Id], function (error, results, fields) {
			if(error){
				res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			} else {
				res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			}
		});
	}
});

app.get('/api/comments/p', function(req, res, next) {
	var Id = req.body.postId;

	if (Id == undefined) {
		res.send(JSON.stringify({"status": 500, "error": error, "response": 'missing attribute in request'})); 
	} else {
		res.locals.connection.query('SELECT * from comments where postId=?', [Id], function (error, results, fields) {
			if(error){
				res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			} else {
				res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			}
		});
	}
});

app.get('/api/comments/u', function(req, res, next) {
	var Id = req.body.userId;

	if (Id == undefined) {
		res.send(JSON.stringify({"status": 500, "error": error, "response": 'missing attribute in request'})); 
	} else {
		res.locals.connection.query('SELECT * from comments where userId=?', [Id], function (error, results, fields) {
			if(error){
				res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			} else {
				res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			}
		});
	}
});

app.post('/api/comments', function(req, res, next) {
	var postId = req.body.postId;
	var text = req.body.text;
	var createdAt = req.body.createdAt;
	var userId = req.body.userId;

	if (postId == undefined || text == undefined || createdAt == undefined || userId) {
		res.send(JSON.stringify({"status": 500, "error": error, "response": 'missing attribute in request'})); 
	} else {
		res.locals.connection.query('Insert into comments (postId, text, createdAt, userId) values(?,?,?,?)',
		[postId, text, createdAt, userId] , function (error, results, fields) {
			  if(error){
				  res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			  } else {
				  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			  }
		  });
	}

});

app.put('/api/comments', function(req, res, next) {
	var Id = req.body.Id;
	var postId = req.body.postId;
	var text = req.body.text;
	var createdAt = req.body.createdAt;
	var userId = req.body.userId;

	if (Id == undefined || postId == undefined || text == undefined || createdAt == undefined || userId) {
		res.send(JSON.stringify({"status": 500, "error": error, "response": 'missing attribute in request'})); 
	} else {
		res.locals.connection.query('Update comments set postId=?, text=?, createdAt=?, userId=? where Id=?',
		[postId, text, createdAt, userId, Id] , function (error, results, fields) {
			if(error){
				res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			} else {
				res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			}
		});
	}
});

app.delete('/api/comments', function(req, res, next) {
	var Id = req.body.Id;

	if (Id == undefined) {
		res.send(JSON.stringify({"status": 500, "error": error, "response": 'missing attribute in request'})); 
	} else {
		res.locals.connection.query('Delete from comments where Id=?',
		[Id] , function (error, results, fields) {
			if(error){
				res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
			} else {
				res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			}
		});
	}
});