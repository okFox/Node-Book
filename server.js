const http = require('http');

const start = () => {
    function onRequest(req, res) {
        console.log('request received...');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello Node!');
        res.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log('listening on port 8888');
};

exports.start = start;