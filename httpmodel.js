/// Http module node js of request and response server using node js and the response using url base forword /.

const http = require('http');
const cs = http.createServer((request, response) => {
    response.write('Working  node js ');
    response.end(" Ended !");
});
cs.listen(3000, "127.0.0.1", () => {
    console.log("listining to the port 3000 in local host -");
});
