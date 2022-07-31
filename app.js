const http = require('http');

function requestListener(request, response) {
    console.log(request);
    process.exit();
}

const server = http.createServer(requestListener);

server.listen(3000);

console.log("new feature!");
console.log("new feature!");