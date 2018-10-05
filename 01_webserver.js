// nodejs가 만들어 놓은 웹서버를 사용하기
const http = require('http'); // Returns a new instance of http.Server.

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//https.Server instance have request, response
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
