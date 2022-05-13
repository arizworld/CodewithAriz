const http = require('http')
const server = http.createServer((req,res)=>{
    res.send('server created');
    // res.end();
})
server.listen(7000)