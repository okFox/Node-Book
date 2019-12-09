const http = require('http');
const url = require('url');

const start = (route, handle) => {
    function onRequest(req, res) {
        const pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received.`);
        route(handle, pathname);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const content = route(handle, pathname);
        res.write(content);
        res.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log('listening on port 8888');
};

exports.start = start;