// var http = require("http");
// http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'application/javascript'});
//    res.end(JSON.stringify({ hello: 'world' }));
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');

const createServer = require('http').createServer;

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
      return;
    } else if(url ==== '/fuckoff') {
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
