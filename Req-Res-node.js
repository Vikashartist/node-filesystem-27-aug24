/// Http module node js.

const http = require('http');
const cs = http.createServer((request, response) => {
    if (request.url == "/") {
        response.end("This is / side");
    } else if (request.url == "/about") {
        response.end("This is about side. ");
    } else if (request.url == "/home") {
        response.end("This is home side");
    } else if (request.url == "/bikash") {
        response.end("me - bikash mahananadia ");
    } else if (request.url == "/whatsapp") {
        response.end("Whats apps no :784512213558745");
    } else {
        response.end(" 404 ERROR .. ");
        response.end(" ! The requested page do not exit in your database! ");
    }
    // console.log("working !");
    // response.end("yes this is working ");

});
cs.listen(3000, "127.0.0.1", () => {
    console.log("listining to the port 3000 in local host -");
});
