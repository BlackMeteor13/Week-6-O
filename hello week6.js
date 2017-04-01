// bring in the Express module
var express = require('express');
// create a new instance of express
var app = express();

// ** Routes ** //
// Set up the home page
app.get('/',function(request,response){
	// respond with my quote
	response.send("<h1>The World that can show its beauty and uniqueness </h1>");
});

app.get('/quote',function(request,response){
	// respond with my quote
	response.send("<h2>Never stop fighting until you arrive at your destined place. That is, the unique you.Have an aim in life, continuously acquire knowledge, work hard, and have perserverancec to realise the great life.- A.P.J Abdul Kalam</h2>");
});

app.get('/about',function(request,response){
	// respond with
	response.send("<h3>Behance is where my work is located. </h3>");
});

app.get('/info',function(request,response){
	// respond with my quote
	response.send("<h3>If you need to talk..chat here.. </h3>");
});

// Start the server. Listen for traffic on port 3000
app.listen(3000, function () {
	// Print out a message to the console
  	console.log('Listening on port 3000!');
});
