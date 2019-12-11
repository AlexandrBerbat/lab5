const PORT = process.env.PORT || 3000;
const http = require('http')
const fs = require("fs");
//const hostname = '127.0.0.1'
//const port = 3000
const server = http.createServer((req, response) => {
 response.statusCode = 200
 response.setHeader("Content-Type", "text/html")
 fs.readFile("./Laba12.html", null, (error, data) => {
  if (error) {
    response.writeHead(404);
    response.write("Whoops! File not found!");
  } else {
    response.write(data);
  }
  response.end();
  });
 //res.end('Hi there!\n')
})
server.listen(PORT, () => {
 console.log(`Server running`)
})