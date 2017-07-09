const createServer = require('http').createServer;

const PORT = process.env.PORT || 3000;

const app = createServer(
  (req, res) => {
    console.log(req.headers);
    res.end('AAAAHHHHHHHHH!!!!!!!!!!');
  }
).listen(
  PORT,
  () => {
    console.log(`Listening on port ${PORT}`)
  }
);
