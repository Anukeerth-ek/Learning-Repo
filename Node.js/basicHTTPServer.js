
const http = require('http')

const server = http.createServer((req, res)=> {
    if(req.url === '/hello') {
        res.writeHead(200, {'content-type': 'plain/text'});
        res.end("Hello world!")
    }
    else {
        res.writeHead(400)
        res.end("Not found")
    }
})

server.listen(3000, ()=> {
    console.log('server listening on', 3000)
})

