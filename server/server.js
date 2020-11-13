const express = require('express');

const app = express();

const fileServerMiddleware = express.static('public');

const anotherMiddleware = express.static('personal')

app.use(fileServerMiddleware);

app.use('/api', anotherMiddleware);

app.listen(3000, function(){
	console.log('App started on port 3000');
});