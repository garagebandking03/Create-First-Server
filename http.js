// var http = require("http");
// http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'application/javascript'});
//    res.end(JSON.stringify({ hello: 'world' }));
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');

const createServer = require('http').createServer;

// const app = require('express')();
//
// app.get('/signup',function(req,res){
//  res.sendFile(path.join(__dirname+'/signup.html'));

const PORT = process.env.PORT || 3000;

const app = createServer(
  (req, res) => {
    const {
      url,
      headers,
      method,
    } = req;
    console.log(url, headers,method);
    if(url === '/') {
      res.end(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Server Test</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        </head>
        <body>
         <h1>Hello, world!</h1>
         <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
       </body>
      </html>`)
      return;
    } else if(url === '/georgetakei') {
      res.end(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Server Test</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        </head>
        <body>
         <h1>Oh My!</h1>
         <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
       </body>
      </html>`)
      return;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
).listen(
  PORT,
  () => {
    console.log(`Listening on port ${PORT}`)
  }
);
