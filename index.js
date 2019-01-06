// const http = require('http');
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
// const getDate = require('./date.js');

// let server = http.createServer((req, res) => {
// 	let html = `<h1>Environment Variables</h1>`;
// 	// Add new code to test the live reload
// 	html += `<h2>As of: ${getDate()}</h2><br>`;
// 	// Iterate over `process.env` object and
// 	// print its values.
// 	Object.keys(process.env).forEach((k) => {
// 		html += `${k} = ${process.env[k]} <br>`
// 	});
// 	// Set the response status and response content 
// 	// type header
// 	res.writeHead(200, {
// 		'content-type': 'text/html'
// 	});
// 	return res.end(html);
// });

// start listening

app.get('/',(req,res)=>{
	res.send("Express Docker Heroku Container Registry")
})
app.listen(port,()=>{
console.log(`Server running on port ${port}`);

});
